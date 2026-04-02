import { useEffect, useState } from 'react';
import API from '../api/axios';

export default function Employees() {
  const [employees, setEmployees] = useState([]);
  const [form, setForm] = useState({
    name: '', department: '', position: '', salary: ''
  });

  const fetchEmployees = async () => {
    const res = await API.get('/employees');
    setEmployees(res.data);
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const addEmployee = async () => {
    await API.post('/employees', form);
    fetchEmployees();
  };

  return (
    <div>
      <h2>Employees</h2>

      <input placeholder="Name" onChange={e => setForm({...form, name: e.target.value})} />
      <input placeholder="Department" onChange={e => setForm({...form, department: e.target.value})} />
      <input placeholder="Position" onChange={e => setForm({...form, position: e.target.value})} />
      <input placeholder="Salary" onChange={e => setForm({...form, salary: e.target.value})} />

      <button onClick={addEmployee}>Add</button>

      <ul>
        {employees.map(emp => (
          <li key={emp._id}>
            {emp.name} - {emp.department}
          </li>
        ))}
      </ul>
    </div>
  );
}
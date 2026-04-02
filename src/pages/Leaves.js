import { useState } from 'react';
import API from '../api/axios';

export default function Leaves() {
  const [form, setForm] = useState({
    employeeId: '',
    type: '',
    fromDate: '',
    toDate: ''
  });

  const applyLeave = async () => {
    await API.post('/leaves', form);
    alert('Leave Applied');
  };

  return (
    <div>
      <h2>Apply Leave</h2>

      <input placeholder="Employee ID" onChange={e => setForm({...form, employeeId: e.target.value})} />
      <input placeholder="Type" onChange={e => setForm({...form, type: e.target.value})} />
      <input type="date" onChange={e => setForm({...form, fromDate: e.target.value})} />
      <input type="date" onChange={e => setForm({...form, toDate: e.target.value})} />

      <button onClick={applyLeave}>Apply</button>
    </div>
  );
}
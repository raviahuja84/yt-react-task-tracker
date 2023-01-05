import { useState } from 'react';
import { useContext } from 'react';
import DataContext from '../context/DataContext';

const AddTask = () => {
  const { tasks, setTasks } = useContext(DataContext);

  const [text, SetText] = useState('');
  const [day, SetDay] = useState('');
  const [reminder, SetReminder] = useState(false);

  // Add New Task
  const addTask = async (task) => {
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    });

    const newTask = await res.json();
    setTasks([...tasks, newTask]);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert('Please add a task');
      return;
    }

    addTask({ text, day, reminder });

    // Clear Form fields
    SetText('');
    SetDay('');
    SetReminder(false);
  };

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Task</label>
        <input
          type='text'
          placeholder='Add Task'
          value={text}
          onChange={(e) => SetText(e.target.value)}
        />
      </div>

      <div className='form-control'>
        <label>Day & Time</label>
        <input
          type='text'
          placeholder='Add Day & Time'
          value={day}
          onChange={(e) => SetDay(e.target.value)}
        />
      </div>

      <div className='form-control form-control-check'>
        <label>Set Reminder</label>
        <input
          type='checkbox'
          checked={reminder}
          value={reminder}
          onChange={(e) => SetReminder(e.currentTarget.checked)}
        />
      </div>

      <input type='submit' value='Save Task' className='btn btn-block' />
    </form>
  );
};

export default AddTask;

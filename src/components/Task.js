import { FaTimes } from 'react-icons/fa';
import { useContext } from 'react';
import DataContext from '../context/DataContext';

const Task = ({ task }) => {
  const { deleteTask, toggleReminder } = useContext(DataContext);

  return (
    <div
      className={`task ${task.reminder ? 'reminder' : ''}`}
      onDoubleClick={() => toggleReminder(task.id)}
    >
      <h3>
        {task.text}
        <FaTimes
          style={{ color: 'red', cursor: 'pointer' }}
          onClick={() => deleteTask(task.id)}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;

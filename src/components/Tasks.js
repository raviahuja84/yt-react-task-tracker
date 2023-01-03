import React from 'react';
import Task from './Task';
import { useContext } from 'react';
import DataContext from '../context/DataContext';

const Tasks = () => {
  const { tasks } = useContext(DataContext);

  return (
    <>
      {tasks.map((task, index) => (
        <Task key={index} task={task} />
      ))}
    </>
  );
};

export default Tasks;

import React from 'react';
import { useContext } from 'react';
import DataContext from '../context/DataContext';
import Tasks from './Tasks';
import AddTask from './AddTask';

const Home = () => {
  const { tasks, showAddTask } = useContext(DataContext);

  return (
    <>
      {showAddTask && <AddTask />}
      {tasks?.length > 0 ? <Tasks /> : 'No Tasks to Show.'}
    </>
  );
};

export default Home;

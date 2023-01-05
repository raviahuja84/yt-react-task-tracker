import React from 'react';
import Button from './Button';
import { useLocation } from 'react-router-dom';
import { useContext } from 'react';
import DataContext from '../context/DataContext';

const Header = ({ title }) => {
  const location = useLocation();
  const { showAddTask, toggleShowAddTask } = useContext(DataContext);

  return (
    <header className='header'>
      <h1>{title}</h1>
      {location.pathname === '/' && (
        <Button
          color={showAddTask ? 'red' : 'green'}
          text={showAddTask ? 'Close' : 'Add'}
          onClick={toggleShowAddTask}
        />
      )}
    </header>
  );
};

Header.defaultProps = {
  title: 'Task Tracker',
};

export default Header;

import React from 'react';
import Button from './Button';

const Header = ({ title }) => {
  const onClick = (e) => {
    e.preventDefault();
    console.log('Clicked Now');
  };

  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button color='green' text='Add' onClick={onClick} />
    </header>
  );
};

Header.defaultProps = {
  title: 'Task Tracker',
};

export default Header;

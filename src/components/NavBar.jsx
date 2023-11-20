import React from 'react';

const NavBar = ({ onNavigate }) => {
  return (
    <nav>
      <button onClick={() => onNavigate('list')}>Task List</button>
      <button onClick={() => onNavigate('form')}>Add Task</button>
    </nav>
  );
};

export default NavBar;
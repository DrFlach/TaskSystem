import React from 'react';

const TaskItem = ({ task, onDelete, onEdit }) => {
  return (
    <div>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Status: {task.status}</p>
      <button onClick={() => onDelete(task.id)}>Delete</button>
      <button onClick={() => onEdit(task)}>Edit</button>
    </div>
  );
};

export default TaskItem;
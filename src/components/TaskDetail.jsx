import React from 'react';

const TaskDetail = ({ task }) => {
  return (
    <div>
      <h2>Task Details</h2>
      {task && (
        <div>
          <p>Title: {task.title}</p>
          <p>Description: {task.description}</p>
          <p>Status: {task.status}</p>
        </div>
      )}
    </div>
  );
};

export default TaskDetail;
import React, { useState } from 'react';

const TaskForm = ({ onSubmit, task }) => {
  const [title, setTitle] = useState(task ? task.title : '');
  const [description, setDescription] = useState(task ? task.description : '');
  const [status, setStatus] = useState(task ? task.status : '');

  const handleSubmit = event => {
    event.preventDefault();
    const newTask = { title, description, status };

    onSubmit(newTask);
  };

  return (
    <div>
      <h2>{task ? 'Edit Task' : 'Add Task'}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
        </label>
        <br />
        <label>
          Description:
          <input type="text" value={description} onChange={e => setDescription(e.target.value)} />
        </label>
        <br />
        <label>
          Status:
          <input type="text" value={status} onChange={e => setStatus(e.target.value)} />
        </label>
        <br />
        <button type="submit">{task ? 'Update Task' : 'Add Task'}</button>
      </form>
    </div>
  );
};

export default TaskForm;





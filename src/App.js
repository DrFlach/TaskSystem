import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import TaskDetail from './TaskDetail';
import TaskCalendar from './TaskCalendar';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const [view, setView] = useState('list'); // 'list', 'form', 'details', 'calendar'

  useEffect(() => {
    fetch('http://localhost:8080/tasks')
      .then(response => response.json())
      .then(data => setTasks(data))
      .catch(error => console.error('Error fetching tasks:', error));
  }, []);

  const handleDelete = taskId => {
    fetch(`http://localhost:8080/tasks/${taskId}`, {
      method: 'DELETE',
    })
      .then(() => setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId)))
      .catch(error => console.error('Error deleting task:', error));
  };

  const handleEdit = task => {
    setSelectedTask(task);
    setView('form');
  };

  const handleAdd = newTask => {
    fetch('http://localhost:8080/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTask),
    })
      .then(response => response.json())
      .then(data => setTasks(prevTasks => [...prevTasks, data]))
      .catch(error => console.error('Error adding task:', error));

    setView('list');
  };

  const handleUpdate = (taskId, updatedTask) => {
    fetch(`http://localhost:8080/tasks/${taskId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedTask),
    })
      .then(response => response.json())
      .then(data =>
        setTasks(prevTasks =>
          prevTasks.map(task => (task.id === taskId ? { ...task, ...data } : task))
        )
      )
      .catch(error => console.error('Error updating task:', error));

    setView('list');
  };

  const handleNavigate = view => {
    // Handle navigation between views
    setView(view);
  };

  const handleDateSelected = selectedTasks => {
    setTasks(selectedTasks);
    setView('list');
  };

  return (
    <div>
      <NavBar onNavigate={handleNavigate} />
      {view === 'list' && (
        <TaskList tasks={tasks} onDelete={handleDelete} onEdit={handleEdit} />
      )}
      {view === 'form' && (
        <TaskForm onSubmit={selectedTask ? handleUpdate : handleAdd} task={selectedTask} />
      )}
      {view === 'details' && <TaskDetail task={selectedTask} />}
      {view === 'calendar' && (
        <TaskCalendar tasks={tasks} onSelect={handleDateSelected} />
      )}
    </div>
  );
};

export default App;

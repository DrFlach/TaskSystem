const API_BASE_URL = 'http://localhost:8080/api/tasks'; // Замените на ваш URL бэкенда

const api = {
  fetchTasks: async () => {
    const response = await fetch(API_BASE_URL);
    const data = await response.json();
    return data;
  },
  createTask: async (task) => {
    const response = await fetch(API_BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    });
    const data = await response.json();
    return data;
  },
  fetchTaskById: async (taskId) => {
    const response = await fetch(`${API_BASE_URL}/${taskId}`);
    const data = await response.json();
    return data;
  },
};

export default api;
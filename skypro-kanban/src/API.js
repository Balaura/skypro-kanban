const API_BASE_URL = 'https://wedev-api.sky.pro/api';

export async function getTasks(token) {
  const response = await fetch(`${API_BASE_URL}/kanban`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    throw new Error('Ошибка при загрузке задач');
  }
  return response.json();
}

export async function loginUser(login, password) {
  const response = await fetch(`${API_BASE_URL}/user/login`, {
    method: 'POST',
    body: JSON.stringify({ login, password }),
  });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || 'Ошибка при входе');
  }
  return response.json();
}

export async function registerUser(login, name, password) {
  const response = await fetch(`${API_BASE_URL}/user`, {
    method: 'POST',
    body: JSON.stringify({ login, name, password }),
  });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || 'Ошибка при регистрации');
  }
  return response.json();
}

export async function addTask(token, taskData) {
  const response = await fetch(`${API_BASE_URL}/kanban`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(taskData),
  });

  if (!response.ok) {
    throw new Error('Ошибка при добавлении задачи');
  }

  return response.json();
}

export async function editTask(token, id, taskData) {
  const response = await fetch(`${API_BASE_URL}/kanban/${id}`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(taskData),
  });
  if (!response.ok) {
    const errorData = await response.json();
    if (response.status === 404) {
      throw new Error('Задача не найдена');
    }
    throw new Error(errorData.error || 'Произошла ошибка при запросе');
  }
  return response.json();
}

export async function deleteTask(token, id) {
  const response = await fetch(`${API_BASE_URL}/kanban/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    throw new Error('Ошибка при удалении задачи');
  }
  return response.json();
}

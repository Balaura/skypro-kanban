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

export async function addTask(taskData) {
  const response = await fetch(`${API_BASE_URL}/kanban`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(taskData),
  });

  if (!response.ok) {
    throw new Error('Ошибка при добавлении задачи');
  }

  return response.json();
}

export async function getTaskById(id) {
  if (id === 'new') {
    return { task: { title: 'Новая задача', description: '', status: 'Без статуса' } };
  }

  const token = localStorage.getItem('token');
  if (!token) {
    throw new Error('Отсутствует токен авторизации');
  }

  const response = await fetch(`${API_BASE_URL}/kanban/${id}`, {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error('Задача не найдена');
    }
    throw new Error('Ошибка при получении задачи');
  }

  return response.json();
}

export async function updateTask(id, taskData) {
  const formData = new FormData();

  for (const [key, value] of Object.entries(taskData)) {
    if (value !== undefined && value !== null) {
      formData.append(key, value);
    }
  }

  const response = await fetch(`${API_BASE_URL}/kanban/${id}`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    },
    body: formData,
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || 'Ошибка при обновлении задачи');
  }

  return response.json();
}

export async function deleteTask(id) {
  if (id === 'new') {
    return { success: true };
  }
  const response = await fetch(`${API_BASE_URL}/kanban/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    },
  });

  if (!response.ok) {
    throw new Error('Ошибка при удалении задачи');
  }

  return response.json();
}
export async function createTask(taskData) {
  console.log('Входные данные:', taskData);

  const formData = new FormData();
  for (const [key, value] of Object.entries(taskData)) {
    if (value !== undefined && value !== null) {
      formData.append(key, value);
    }
  }
  const formDataObj = Object.fromEntries(formData);
  const formDataJson = JSON.stringify(formDataObj);

  console.log('Отправляемые данные:', formDataJson);

  try {
    const response = await fetch(`${API_BASE_URL}/kanban`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
      body: formDataJson,
    });

    console.log('Статус ответа:', response.status);
    console.log('Заголовки ответа:', Object.fromEntries(response.headers));

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Ошибка ответа:', errorText);
      throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
    }

    const contentType = response.headers.get("content-type");
    if (contentType && contentType.indexOf("application/json") !== -1) {
      const jsonResponse = await response.json();
      console.log('JSON ответ:', jsonResponse);
      return jsonResponse;
    } else {
      const textResponse = await response.text();
      console.log('Текстовый ответ:', textResponse);
      return { message: textResponse };
    }
  } catch (error) {
    console.error('Ошибка в createTask:', error);
    throw error;
  }
}
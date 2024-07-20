import React from 'react';
import Column from '../Column/Column';
import '../../App.css';

const statusList = ["БЕЗ СТАТУСА", "НУЖНО СДЕЛАТЬ", "В РАБОТЕ", "ТЕСТИРОВАНИЕ", "ГОТОВО"];

const tasks = [
  { id: 1, title: "Название задачи", category: "Web Design", status: "БЕЗ СТАТУСА", date: "30.10.23" },
  { id: 2, title: "Название задачи", category: "Research", status: "БЕЗ СТАТУСА", date: "31.10.23" },
  { id: 3, title: "Название задачи", category: "Web Design", status: "БЕЗ СТАТУСА", date: "30.10.23" },
  { id: 4, title: "Название задачи", category: "Copywriting", status: "БЕЗ СТАТУСА", date: "31.10.23" },
  { id: 5, title: "Название задачи", category: "Web Design", status: "БЕЗ СТАТУСА", date: "31.10.23" },

  { id: 6, title: "Название задачи", category: "Research", status: "НУЖНО СДЕЛАТЬ", date: "30.10.23" },

  { id: 7, title: "Название задачи", category: "Research", status: "В РАБОТЕ", date: "30.10.23" },
  { id: 8, title: "Название задачи", category: "Copywriting", status: "В РАБОТЕ", date: "30.10.23" },
  { id: 9, title: "Название задачи", category: "Web Design", status: "В РАБОТЕ", date: "30.10.23" },

  { id: 10, title: "Название задачи", category: "Research", status: "ТЕСТИРОВАНИЕ", date: "01.11.23" },

  { id: 11, title: "Название задачи", category: "Research", status: "ГОТОВО", date: "01.11.23" },
];

function Main() {
  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            {statusList.map(status => (
              <Column
                key={status}
                title={status}
                tasks={tasks.filter(task => task.status === status)}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
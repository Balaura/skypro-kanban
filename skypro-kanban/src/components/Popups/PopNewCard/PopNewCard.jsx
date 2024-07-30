import React, { useState } from 'react';
import Calendar from '../../Calendar/Calendar';
import '../../../App.css';

function PopNewCard({ onCardAdd }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Web Design');

  const handleCreateNewTask = (e) => {
    e.preventDefault();
    onCardAdd({
      id: Date.now(),
      title: title,
      topic: topic,
      date: new Date().toLocaleDateString('ru-RU'),
      status: "Без статуса"
    });
    setTitle('');
    setDescription('');
    setCategory('Web Design');
  };

  return (
    <div className="pop-new-card" id="popNewCard">
      <div className="pop-new-card__container">
        <div className="pop-new-card__block">
          <div className="pop-new-card__content">
            <h3 className="pop-new-card__ttl">Создание задачи</h3>
            <a href="#" className="pop-new-card__close">✖</a>
            <div className="pop-new-card__wrap">
              <form className="pop-new-card__form form-new" id="formNewCard" action="#">
                <div className="form-new__block">
                  <label htmlFor="formTitle" className="subttl">Название задачи</label>
                  <input
                    className="form-new__input"
                    type="text"
                    name="name"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    autoFocus
                  />
                </div>
                <div className="form-new__block">
                  <label htmlFor="textArea" className="subttl">Описание задачи</label>
                  <textarea
                    className="form-new__area"
                    name="text"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
              </form>
              <Calendar />
            </div>
            <div className="pop-new-card__categories categories">
              <p className="categories__p subttl">Категория</p>
              <div className="categories__themes">
                <div
                  className={`categories__theme _orange ${category === 'Web Design' ? '_active-category' : ''}`}
                  onClick={() => setCategory('Web Design')}
                >
                  <p className="_orange">Web Design</p>
                </div>
                <div
                  className={`categories__theme _green ${category === 'Research' ? '_active-category' : ''}`}
                  onClick={() => setCategory('Research')}
                >
                  <p className="_green">Research</p>
                </div>
                <div
                  className={`categories__theme _purple ${category === 'Copywriting' ? '_active-category' : ''}`}
                  onClick={() => setCategory('Copywriting')}
                >
                  <p className="_purple">Copywriting</p>
                </div>
              </div>
            </div>
            <button
              className="form-new__create _hover01"
              id="btnCreate"
              onClick={handleCreateNewTask}
            >
              Создать задачу
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopNewCard;

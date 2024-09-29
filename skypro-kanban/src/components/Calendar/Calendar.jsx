import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';
import ru from 'date-fns/locale/ru';
import * as styles from './CalendarStyles';

function Calendar({ selectedDate, setSelectedDate }) {
  return (
    <styles.CalendarWrapper className="calendar">
      <styles.CalendarTitle className="calendar__ttl subttl">Даты</styles.CalendarTitle>
      <DayPicker
        mode="single"
        selected={selectedDate}
        onSelect={setSelectedDate}
        locale={ru}
      />
      <styles.CalendarPeriod className="calendar__period">
        <styles.CalendarP className="calendar__p date-end">
          Срок исполнения: <span className="date-control">{format(selectedDate, 'dd.MM.yyyy', { locale: ru })}</span>
        </styles.CalendarP>
      </styles.CalendarPeriod>
    </styles.CalendarWrapper>
  );
}

export default Calendar;
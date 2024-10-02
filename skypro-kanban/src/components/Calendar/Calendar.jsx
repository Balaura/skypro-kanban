import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';
import ru from 'date-fns/locale/ru';
import * as styles from './CalendarStyles';

export default function Calendar({ selectedDate, setSelectedDate, readOnly }) {
  const today = new Date();

  return (
    <styles.CalendarWrapper className="calendar">
      <styles.CalendarTitle className="calendar__ttl subttl">Даты</styles.CalendarTitle>
      <DayPicker
        mode="single"
        selected={selectedDate}
        onSelect={readOnly ? undefined : setSelectedDate}
        disabled={readOnly}
        locale={ru}
        modifiers={{ today, booked: selectedDate }}
        modifiersStyles={{
          today: { backgroundColor: ' #EAEEF6', color: '#94A6BE' },
          booked: { backgroundColor: '#94A6BE', color: 'white' }
        }}
      />
      <styles.CalendarPeriod className="calendar__period">
        <styles.CalendarP className="calendar__p date-end">
          Срок исполнения:{' '}
          <span className="date-control">{format(selectedDate, 'dd.MM.yyyy', { locale: ru })}</span>
        </styles.CalendarP>
      </styles.CalendarPeriod>
    </styles.CalendarWrapper>
  );
}
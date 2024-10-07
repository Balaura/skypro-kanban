import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';
import ru from 'date-fns/locale/ru';
import * as styles from './CalendarStyles';

export default function Calendar({ selectedDate, setSelectedDate, readOnly }) {
  const today = new Date();

  const formatMonthCapitalized = (month, options) => {
    const monthName = ru.localize.month(month.getMonth(), { width: 'wide' });
    return monthName.charAt(0).toUpperCase() + monthName.slice(1);
  };

  return (
    <styles.CalendarWrapper>
      <styles.CalendarTitle>Даты</styles.CalendarTitle>
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
        formatters={{
          formatMonth: formatMonthCapitalized,
          formatCaption: formatMonthCapitalized
        }}
      />
      <styles.CalendarPeriod>
        <styles.CalendarP>
          Срок исполнения:{' '}
          <span>{format(selectedDate, 'dd.MM.yyyy', { locale: ru })}</span>
        </styles.CalendarP>
      </styles.CalendarPeriod>
    </styles.CalendarWrapper>
  );
}
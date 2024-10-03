import styled from 'styled-components';

export const CalendarWrapper = styled.div`
  width: 182px;
  margin-bottom: 20px;

  .rdp {
    --rdp-cell-size: 24px;
    --rdp-accent-color: ${props => props.theme.accent};
    --rdp-background-color: transparent;
    --rdp-accent-color-dark: ${props => props.theme.accentHover};
    --rdp-background-color-dark: #333;
    --rdp-outline: 2px solid var(--rdp-accent-color);
    --rdp-outline-selected: 3px solid var(--rdp-accent-color);
    --rdp-selected-color: ${props => props.theme.accent};
    margin: 0;
    font-size: 10px;
  }

  .rdp-months {
    justify-content: flex-start;
  }

  .rdp-month {
    width: 100%;
    background: transparent;
  }

  .rdp-month_caption {
    height: 25px;
    padding-left: 5px;
  }

  .rdp-table {
    width: 100%;
    max-width: 100%;
  }

  .rdp-caption {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0;
    text-align: left;
  }

  .rdp-caption_label {
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    color: #94A6BE;
  }

  .rdp-chevron {
    display: inline-block;
    fill: #94A6BE;
    height: 16px;
  }

  .rdp-nav {
    white-space: nowrap;
    height: 25px;
  }

  .rdp-head_cell {
    font-weight: 500;
    font-size: 10px;
    line-height: 12px;
    color: ${props => props.theme.textSecondary};
    text-align: center;
    vertical-align: middle;
    padding: 0;
    height: 30px;
  }

  .rdp-cell {
    height: 24px;
    padding: 0;
  }


  .rdp-day {
    align-items: center;
    justify-content: center;
    height: 24px;
    width: 24px;
    font-size: 10px;
    line-height: 12px;
    color: ${props => props.theme.textSecondary};
    outline: none;
    padding: 0;
  }

  .rdp-day_today {
    background-color: gray; /* Цвет фона для текущей даты */
    color: red; /* Цвет текста */
  }

  .rdp-day_selected {
    background-color: ${props => props.theme.accent};
    color: #FFFFFF;
    font-weight: 700;
  }

  .rdp-day_button {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: none;
    padding: 0;
  }

  .rdp-day_selected:hover {
    background-color: var(--rdp-accent-color-dark);
  }

  .rdp-day:hover:not(.rdp-day_selected) {
    background-color: ${props => props.theme.hoverBackground};
  }

  .rdp-day_outside {
    opacity: 0.5;
  }

  .rdp-button:hover:not(.rdp-day_selected) {
    background-color: ${props => props.theme.hoverBackground};
  }
`;

export const CalendarTitle = styled.p`
  margin-bottom: 14px;
  padding: 0 7px;
  color: ${props => props.theme.textPrimary};
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const CalendarPeriod = styled.div`
  padding: 0 7px;
`;

export const CalendarP = styled.p`
  color: ${props => props.theme.textSecondary};
  font-size: 10px;
  line-height: 1;
  padding-top: 10px;

  span {
    color: ${props => props.theme.textPrimary};
  }
`;

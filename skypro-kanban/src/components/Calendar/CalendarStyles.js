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
    color: ${props => props.theme.textPrimary};
  }

  .rdp-chevron {
    display: inline-block;
    fill: var(--rdp-accent-color);
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
    /* display: flex; */
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

// export const CalendarWrapper = styled.div`
//   width: 168px;
//   height: 228px;
//   font-family: 'Roboto', sans-serif;
  
//   .rdp {
//     --rdp-cell-size: 22px;
//     --rdp-accent-color: #94A6BE;
//     --rdp-background-color: transparent;
//     --rdp-accent-color-dark: #3377FF;
//     --rdp-background-color-dark: #333;
//     --rdp-outline: 2px solid var(--rdp-accent-color);
//     --rdp-outline-selected: 3px solid var(--rdp-accent-color);
//     --rdp-selected-color: #3377FF;
//     margin: 0;
//     padding: 0;
//   }

//   .rdp-months {
//     justify-content: center;
//   }

//   .rdp-month {
//     width: 100%;
//     background: transparent;
//   }

//   .rdp-table {
//     width: 100%;
//     max-width: 100%;
//   }

//   .rdp-caption {
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     padding: 0;
//     text-align: left;
//   }

//   .rdp-caption_label {
//     font-weight: 600;
//     font-size: 14px;
//     line-height: 16px;
//     color: #000000;
//   }

//   .rdp-nav {
//     white-space: nowrap;
//   }

//   .rdp-head_cell {
//     font-weight: 500;
//     font-size: 10px;
//     line-height: 12px;
//     color: #94A6BE;
//     text-align: center;
//     vertical-align: middle;
//     padding: 0;
//     height: 28px;
//   }

//   .rdp-cell {
//     height: 22px;
//     padding: 0;
//   }

//   .rdp-day {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     height: 22px;
//     width: 22px;
//     font-size: 10px;
//     line-height: 12px;
//     color: #94A6BE;
//     outline: none;
//   }

//   .rdp-day_selected {
//     background-color: #94A6BE;
//     color: #FFFFFF;
//   }

//   .rdp-day_selected:hover {
//     background-color: var(--rdp-accent-color-dark);
//   }

//   .rdp-day:hover:not(.rdp-day_selected) {
//     background-color: #E9D4FF;
//   }

//   .rdp-day_outside {
//     opacity: 0.5;
//   }

//   .rdp-button:hover:not(.rdp-day_selected) {
//     background-color: #E9D4FF;
//   }
// `;

// export const CalendarContent = styled.div`
//   margin-bottom: 12px;
// `;

// export const CalendarMonth = styled.div`
//   color: ${props => props.theme.textSecondary};
//   font-size: 14px;
//   line-height: 25px;
//   font-weight: 600;
// `;

// export const CalendarDaysNames = styled.div`
//   display: flex;
//   flex-wrap: nowrap;
//   align-items: center;
//   justify-content: space-between;
//   margin: 7px 0;
//   padding: 0 7px;
// `;

// export const CalendarDayName = styled.div`
//   color: ${props => props.theme.textSecondary};
//   font-size: 10px;
//   font-weight: 500;
//   line-height: normal;
//   letter-spacing: -0.2px;
// `;

// export const CalendarCells = styled.div`
//   width: 182px;
//   height: 126px;
//   display: flex;
//   flex-wrap: wrap;
// `;

// export const CalendarCell = styled.div`
//   width: 22px;
//   height: 22px;
//   margin: 2px;
//   border-radius: 50%;
//   display: flex;
//   flex-wrap: nowrap;
//   align-items: center;
//   justify-content: center;
//   color: ${props => props.theme.textSecondary};
//   font-size: 10px;
//   line-height: 1;
//   letter-spacing: -0.2px;
//   cursor: pointer;

//   &._other-month {
//     opacity: 0;
//   }

//   &._cell-day:hover {
//     color: ${props => props.theme.textSecondary};
//     background-color: ${props => props.theme.background};
//   }

//   &._active-day {
//     background-color: ${props => props.theme.secondary};
//     color: ${props => props.theme.cardBackground};
//   }

//   &._current {
//     font-weight: 700;
//   }
// `;

// export const CalendarNav = styled.div`
//   width: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   margin-top: 14px;
//   padding: 0 7px;
// `;

// export const NavAction = styled.div`
//   width: 18px;
//   height: 25px;
//   cursor: pointer;
//   display: flex;
//   align-items: center;
//   justify-content: center;

//   svg {
//     fill: ${props => props.theme.textSecondary};
//   }
// `;

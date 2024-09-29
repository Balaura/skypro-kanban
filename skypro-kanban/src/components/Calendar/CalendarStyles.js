import styled from 'styled-components';

export const CalendarWrapper = styled.div`
  width: 182px;
  margin-bottom: 20px;
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

  span {
    color: ${props => props.theme.textPrimary};
  }
`;

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

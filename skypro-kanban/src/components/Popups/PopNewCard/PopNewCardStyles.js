import styled from 'styled-components';

export const PopBrowse = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CalendarWrapper = styled.div`
  width: 100%;
  font-size: 12px;
  max-width: 300px;
  height: auto; 

  .rdp {
    --rdp-cell-size: 10px;
    --rdp-accent-color: ${props => props.theme.calendarAccentColor};
    --rdp-background-color: ${props => props.theme.calendarBackgroundColor};
    margin: 0;
  }

  .rdp-day {
    padding: 0; 
    margin: 2px; 
    border-radius: 32px;
    line-height: 0.1px;
    color: ${props => props.theme.text};
  }

  .rdp-month {
    width: 100%;
  }

  .rdp-table {
    width: 100%;
    max-width: 100%;
  }
`;

export const Container = styled.div`
  position: relative;
  background: ${props => props.theme.cardBackground};
  border-radius: 10px;
  z-index: 1001;
  width: 630px;
  max-width: 90%;
`;

export const Block = styled.div`
  display: block;
  margin: 0 auto;
  background: ${props => props.theme.cardBackground};
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 38px;
  border-radius: 10px;
  position: relative;
`;

export const Content = styled.div`
  display: block;
  text-align: left;
`;

export const TopBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`;

export const Title = styled.h3`
  color: ${props => props.theme.textPrimary};
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
`;

export const Form = styled.form`
  width: 100%;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  color: ${props => props.theme.textPrimary};
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 10px;
`;

export const Status = styled.div`
  margin-bottom: 11px;
`;

export const StatusTitle = styled.p`
  margin-bottom: 14px;
  color: ${props => props.theme.text};
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 10px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`;

export const Button = styled.button`
  height: 30px;
  padding: 0 14px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  cursor: pointer;

  &._btn-bg {
    background-color: ${props => props.theme.primary};
    color: #FFFFFF;
    border: none;
  }

  &._btn-bor {
    background-color: transparent;
    border: 1px solid ${props => props.theme.primary};
    color: ${props => props.theme.primary};
  }

  &._hover01:hover {
    background-color: ${props => props.theme.primaryHover};
  }

  &._hover03:hover {
    background-color: ${props => props.theme.primaryHover};
    color: #FFFFFF;
  }
`;

export const HorizontalLayout = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

export const LeftColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const RightColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const FormBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: 100%;
  outline: none;
  padding: 14px;
  background: ${props => props.theme.cardBackground};
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  color: ${props => props.theme.textPrimary};

  &::placeholder {
    color: ${props => props.theme.textSecondary};
  }
`;

export const TextArea = styled.textarea`
  width: 370px;
  outline: none;
  padding: 14px;
  background: ${props => props.theme.cardBackground};
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  color: ${props => props.theme.textPrimary};
  height: 200px;
  resize: none;

  &::placeholder {
    color: ${props => props.theme.textSecondary};
  }
`;

export const StatusThemes = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const StatusTheme = styled.div`
  border-radius: 24px;
  border: 0.7px solid ${props => props.theme.borderColor};
  color: ${props => props.theme.statusThemeColor};
  padding: 11px 14px 10px;
  margin-right: 7px;
  margin-bottom: 7px;

  p {
    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.14px;
  }
`;

export const TopicThemes = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
`;

export const TopicTheme = styled.div`
  border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  background-color: ${props => props.theme.topicStyles[props.themeKey].backgroundColor};
  color: ${props => props.theme.topicStyles[props.themeKey].color};
  opacity: ${props => props.isActive ? 1 : 0.5};
  padding: 8px 20px;
  cursor: pointer;
  font-size: 14px;

  &._gray {
    background-color: #94A6BE;
    color: #FFFFFF;
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid rgba(148, 166, 190, 0.4);
  border-radius: 5px;
  background-color: #EAEEF6;
  color: #000000;
  font-size: 14px;
`;

export const SelectedDate = styled.p`
  font-size: 14px;
  color: ${props => props.theme.textPrimary};
  margin-top: 10px;
`;
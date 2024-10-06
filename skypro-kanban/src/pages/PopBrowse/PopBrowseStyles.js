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

const getThemeKey = (topic) => {
  switch (topic) {
    case "Web Design":
      return "web-design";
    case "Research":
      return "research";
    case "Copywriting":
      return "copywriting";
    default:
      return "default";
  }
};

export const Theme = styled.div`
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  background-color: ${props => 
    props.theme.topicStyles[getThemeKey(props.$topic)]?.backgroundColor || 'rgba(0, 0, 0, 0.7)'
  };
  color: ${props => 
    props.theme.topicStyles[getThemeKey(props.$topic)]?.color || props.theme.textPrimary
  };

  p {
    font-size: 14px;
    font-weight: 600;
    line-height: 14px;
    white-space: nowrap;
  }
`;

export const Status = styled.div`
  margin-bottom: 11px;
`;

export const StatusTitle = styled.p`
  font-size: 14px;
  font-weight: 600;
  line-height: 10px;
  margin-bottom: 16.41px;
  color: ${props => props.theme.text};
`;

export const StatusThemes = styled.div`
font-family: Roboto;
color: ${props => props.theme.textSecondary};
  font-size: 14px;
  font-weight: 400;
  line-height: 10px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const StatusTheme = styled.div`
  border-radius: 24px;
  border: 0.7px solid #94A6BE;
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

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;  
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

export const Form = styled.form`
  width: 100%;
  margin-bottom: 20px;
`;

export const FormBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  color: ${props => props.theme.text};
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
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
  margin-top: 14px;
  height: 200px;
  resize: none;

  
  &::placeholder {
    color: ${props => props.theme.textSecondary};
  }
`;

export const ThemeDownCategories = styled.div`
  margin-bottom: 20px;
  color: ${props => props.theme.text};
`;

export const CategoriesTitle = styled.p`
  margin-bottom: 14px;
`;

export const CategoryTheme = styled.div`
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  opacity: 0.4;
  background-color: ${props => props.theme.inputBackground};

  p {
    font-size: 14px;
    font-weight: 600;
    line-height: 14px;
    white-space: nowrap;
    color: ${props => props.theme.text};
  }
`;

export const ButtonBrowse = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
`;

export const ButtonEdit = styled(ButtonBrowse)``;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`;

export const Button = styled.button`
  height: 30px;
  margin-bottom: 10px;
  padding: 0 14px;
  background-color: ${props => props.theme.inputBackground};
  color: ${props => props.theme.text};
  border: 1px solid ${props => props.theme.borderColor};
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

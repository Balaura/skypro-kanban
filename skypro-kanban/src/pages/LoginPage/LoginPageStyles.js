import styled from 'styled-components';

export const MainPageWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;

export const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${props => props.theme.background};
`;

export const LoginForm = styled.form`
  width: 368px;
  padding: 50px 60px;
  background-color: ${props => props.theme.cardBackground};
  border-radius: 8px;
  border: 0.7px solid ${props => props.theme.name === 'dark' ? '#4E5566' : '#D4DBE5'};
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: ${props => props.theme.textPrimary};
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 0.7px solid ${props => props.error ? 'red' : props.theme.primary};
  border-radius: 8px;
  padding: 8px, 10px, 8px, 10px;
  background-color: ${props => props.theme.cardBackground};
  color: ${props => props.theme.textPrimary};
  &:focus {
    border-color: ${props => props.theme.primary};
    box-shadow: 0 0 0 2px ${props => `${props.theme.primary}33`};
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  margin-top: 20px;
  background-color: ${props => props.error ? '#94A6BE' : props.theme.primary};
  color: ${props => props.theme.cardBackground};
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const ErrorMessage = styled.p`
  font-family: Arial;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.01em;
  text-align: center;
  color: red;
`;

export const LinkWrapper = styled.div`
  margin-top: 20px;
  text-align: center;
  color: #94A6BE66;
  font-size: 14px;

  a {
    text-decoration: none;
    line-height:21px;
    color: #94A6BE66;
    font-size: 14px;

    &:hover {
      text-decoration: underline;
    }
  }
`;
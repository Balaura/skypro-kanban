import styled from 'styled-components';

export const RegisterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${props => props.theme.background};
`;

export const RegisterForm = styled.form`
  width: 368px;
  padding: 30px;
  background-color: ${props => props.theme.cardBackground};
  border-radius: 10px;
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: ${props => props.theme.textPrimary};
`;

export const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 24px; // Increased to accommodate error message
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid ${props => props.error ? 'red' : props.theme.secondary};
  border-radius: 5px;
  background-color: ${props => props.theme.cardBackground};
  color: ${props => props.theme.textPrimary};

  &:focus {
    border-color: ${props => props.error ? 'red' : props.theme.primary};
    outline: none;
  }
`;

export const FieldErrorMessage = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  font-size: 12px;
  color: red;
  margin-top: 2px;
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.cardBackground};
  border: none;
  border-radius: 5px 5px 0 0;
  cursor: pointer;
`;

export const ButtonErrorMessage = styled.div`
  width: 100%;
  background-color: #FFA500;
  color: white;
  padding: 5px;
  border-radius: 0 0 5px 5px;
  font-size: 12px;
  text-align: center;
`;

export const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 20px;
  gap: 10px;
  color: #94A6BE66;
  font-size: 14px;

  a {
    color: #94A6BE66;
    text-decoration: none;
    font-size: 14px;

    &:hover {
      text-decoration: underline;
    }
  }
`;
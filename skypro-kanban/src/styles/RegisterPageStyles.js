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
  padding: 50px 60px;
  background-color: ${props => props.theme.cardBackground};
  border-radius: 10px;
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  color: ${props => props.theme.textPrimary};
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid ${props => props.theme.secondary};
  border-radius: 5px;
  background-color: ${props => props.theme.cardBackground};
  color: ${props => props.theme.textPrimary};
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  margin-top: 20px;
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.cardBackground};
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const ErrorMessage = styled.p`
  color: red;
  margin-top: 10px;
`;
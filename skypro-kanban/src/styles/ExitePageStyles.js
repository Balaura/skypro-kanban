import styled from 'styled-components';

export const ExitPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${props => props.theme.background};
`;

export const ExitMessage = styled.h2`
  color: ${props => props.theme.textPrimary};
  font-size: 24px;
  text-align: center;
`;
import styled from 'styled-components';

export const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.textPrimary};
`;

export const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 20px;
`;

export const Message = styled.p`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const StyledLink = styled.a`
  color: ${props => props.theme.primary};
  text-decoration: none;
  font-size: 18px;
  &:hover {
    text-decoration: underline;
  }
`;
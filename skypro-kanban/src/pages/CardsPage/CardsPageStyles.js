import styled from 'styled-components';

export const CardPageWrapper = styled.div`
  padding: 20px;
  background-color: ${props => props.theme.background};
  min-height: 100vh;
`;

export const Title = styled.h1`
  color: ${props => props.theme.textPrimary};
  font-size: 24px;
  margin-bottom: 20px;
`;

export const CardInfo = styled.p`
  color: ${props => props.theme.textSecondary};
  font-size: 16px;
  margin-bottom: 10px;
`;

export const CardContainer = styled.div`
  background-color: ${props => props.theme.cardBackground};
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
import styled from 'styled-components';

export const MainPageWrapper = styled.div`
  width: 100%;
  min-height: 300px;
  overflow-x: hidden;
`;

export const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 70px);
  font-size: 24px;
  color: ${props => props.theme.textPrimary};
`;

export const ErrorWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 70px);
  font-size: 18px;
  color: ${props => props.theme.textPrimary};
  text-align: center;
  padding: 0 20px;
`;
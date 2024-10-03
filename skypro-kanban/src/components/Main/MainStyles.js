import styled from 'styled-components';

export const MainWrapper = styled.main`
  width: 100%;
  background-color: ${props => props.theme.background};
`;

export const MainContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 25px 16px 49px;
`;

export const MainContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
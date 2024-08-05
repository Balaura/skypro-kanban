import styled from 'styled-components';

export const ColumnWrapper = styled.div`
  width: 20%;
  margin: 0 auto;
  display: block;
`;

export const ColumnTitle = styled.div`
  padding: 0 10px;
  margin: 15px 0;

  p {
    color: ${props => props.theme.textSecondary};
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
    text-transform: uppercase;
  }
`;

export const CardsContainer = styled.div`
  width: 100%;
  display: block;
  position: relative;
`;
export const CardsItem = styled.div`
  padding: 5px;
  animation-name: card-animation;
  animation-duration: 500ms;
  animation-timing-function: linear;
`;
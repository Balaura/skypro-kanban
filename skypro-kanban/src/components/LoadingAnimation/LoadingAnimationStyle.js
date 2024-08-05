import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
`;

export const LoadingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
`;

export const SkeletonCard = styled.div`
  width: 220px;
  height: 130px;
  background-color: ${props => props.theme.cardBackground};
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const SkeletonLine = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
  background: linear-gradient(
    to right,
    ${props => props.theme.background} 8%,
    ${props => props.theme.secondary} 18%,
    ${props => props.theme.background} 33%
  );
  background-size: 800px 104px;
  animation: ${shimmer} 1.5s linear infinite;
  border-radius: 4px;
  margin-bottom: 10px;
`;
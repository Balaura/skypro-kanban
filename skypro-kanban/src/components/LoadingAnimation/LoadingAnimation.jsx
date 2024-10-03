import { LoadingWrapper, SkeletonCard, SkeletonLine } from './LoadingAnimationStyle';

const LoadingAnimation = () => {
  return (
    <LoadingWrapper>
      {[1, 2, 3, 4, 5].map((columnIndex) => (
        <div key={columnIndex}>
          {[1, 2, 3].map((cardIndex) => (
            <SkeletonCard key={`${columnIndex}-${cardIndex}`}>
              <SkeletonLine width="100%" height="20px" />
              <SkeletonLine width="70%" height="16px" />
              <SkeletonLine width="50%" height="16px" />
            </SkeletonCard>
          ))}
        </div>
      ))}
    </LoadingWrapper>
  );
};

export default LoadingAnimation;
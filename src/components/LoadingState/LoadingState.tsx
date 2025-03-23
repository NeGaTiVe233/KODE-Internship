import { LoadingContainer, SkeletonItem, SkeletonAvatar, SkeletonContent, SkeletonLine } from "./LoadingState.styles"

const LoadingState = () => {
  const skeletons = Array.from({ length: 10 }, (_, index) => (
    <SkeletonItem key={index}>
      <SkeletonAvatar />
      <SkeletonContent>
        <SkeletonLine width="15%" />
        <SkeletonLine width="5%" />
      </SkeletonContent>
    </SkeletonItem>
  ))

  return <LoadingContainer>{skeletons}</LoadingContainer>
}

export default LoadingState


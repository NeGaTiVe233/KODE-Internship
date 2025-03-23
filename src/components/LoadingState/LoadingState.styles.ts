import styled, { keyframes } from "styled-components"

const shimmer = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: 200px 0;
  }
`

export const LoadingContainer = styled.div`
  padding: 16px;
`

export const SkeletonItem = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid ${(props) => props.theme.colors.divider};
`

export const SkeletonAvatar = styled.div`
  width: 72px;
  height: 72px;
  border-radius: ${(props) => props.theme.borderRadius.circle};
  background-color: ${(props) => props.theme.colors.skeleton};
  margin-right: 16px;
  background-image: linear-gradient(
    90deg,
    ${(props) => props.theme.colors.skeleton} 0px,
    #f5f5f5 40px,
    ${(props) => props.theme.colors.skeleton} 80px
  );
  background-size: 200px 100%;
  animation: ${shimmer} 1.5s infinite linear;
`

export const SkeletonContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const SkeletonLine = styled.div<{ width: string }>`
  height: 16px;
  width: ${(props) => props.width};
  background-color: ${(props) => props.theme.colors.skeleton};
  border-radius: 4px;
  background-image: linear-gradient(
    90deg,
    ${(props) => props.theme.colors.skeleton} 0px,
    #f5f5f5 40px,
    ${(props) => props.theme.colors.skeleton} 80px
  );
  background-size: 200px 100%;
  animation: ${shimmer} 1.5s infinite linear;
`


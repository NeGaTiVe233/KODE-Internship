import styled from "styled-components"

export const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px 16px;
  height: calc(100vh - 120px);
`

export const EmptyIcon = styled.div`
  margin-bottom: 8px;
`

export const EmptyTitle = styled.h2`
  font-size: ${(props) => props.theme.fontSizes.lg};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  color: ${(props) => props.theme.colors.text};
  text-align: center;
  margin-bottom: 12px;
`

export const EmptyMessage = styled.p`
  font-size: ${(props) => props.theme.fontSizes.md};
  color: ${(props) => props.theme.colors.textSecondary};
  text-align: center;
`


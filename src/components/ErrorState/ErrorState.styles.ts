import styled from "styled-components"

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px 16px;
  height: calc(100vh - 120px);
`

export const ErrorIcon = styled.div`
  margin-bottom: 8px;
`

export const ErrorTitle = styled.h2`
  font-size: ${(props) => props.theme.fontSizes.lg};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  color: ${(props) => props.theme.colors.text};
  text-align: center;
  margin-bottom: 12px;
`

export const ErrorMessage = styled.p`
  font-size: ${(props) => props.theme.fontSizes.md};
  color: ${(props) => props.theme.colors.textSecondary};
  text-align: center;
  margin-bottom: 12px;
`

export const RetryButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${(props) => props.theme.colors.primary};
  font-size: ${(props) => props.theme.fontSizes.md};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  cursor: pointer;
  padding: 8px 16px;
  border-radius: ${(props) => props.theme.borderRadius.medium};
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(101, 52, 255, 0.1);
  }
`


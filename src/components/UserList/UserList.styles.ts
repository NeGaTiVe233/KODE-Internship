import styled from "styled-components"

export const UserListContainer = styled.div`
  padding: 16px;
`

export const YearSeparator = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 0;
  margin: 8px 0;
  font-size: ${(props) => props.theme.fontSizes.md};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.textSecondary};
  
  &::before, &::after {
    content: "";
    flex: 1;
    height: 1px;
    background-color: ${(props) => props.theme.colors.divider};
  }
  
  &::before {
    margin-right: 48px;
  }
  
  &::after {
    margin-left: 48px;
  }
`


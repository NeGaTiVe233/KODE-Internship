import styled from "styled-components"

export const UserCardContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 0;
  // border-bottom: 1px solid ${(props) => props.theme.colors.divider};
`
export const UserAvatar = styled.img`
  width: 72px;
  height: 72px;
  border-radius: ${(props) => props.theme.borderRadius.circle};
  object-fit: cover;
  margin-right: 16px;
`

export const UserInfo = styled.div`
  flex: 1;
`

export const UserName = styled.div`
  font-size: ${(props) => props.theme.fontSizes.md};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.text};
  margin-bottom: 4px;
  display: flex;
  align-items: center;
`

export const UserTag = styled.span`
  color: ${(props) => props.theme.colors.textTertiary};
  margin-left: 4px;
  font-weight: ${(props) => props.theme.fontWeights.regular};
`

export const UserDepartment = styled.div`
  font-size: ${(props) => props.theme.fontSizes.sm};
  color: ${(props) => props.theme.colors.textSecondary};
`

export const BirthdayDate = styled.div`
  font-size: ${(props) => props.theme.fontSizes.md};
  color: ${(props) => props.theme.colors.textSecondary};
`


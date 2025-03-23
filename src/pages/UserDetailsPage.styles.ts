import styled from "styled-components"

export const DetailsContainer = styled.div`
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.white};
  padding: 16px;
`

export const BackButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
`

export const UserHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 32px;
`

export const UserAvatar = styled.img`
  width: 104px;
  height: 104px;
  border-radius: ${(props) => props.theme.borderRadius.circle};
  object-fit: cover;
  margin-bottom: 24px;
`

export const UserName = styled.h1`
  font-size: 24px;
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.colors.text};
  margin-bottom: 12px;
  display: flex;
  align-items: center;
`

export const UserTag = styled.span`
  color: ${(props) => props.theme.colors.textTertiary};
  margin-left: 8px;
  font-weight: ${(props) => props.theme.fontWeights.regular};
`

export const UserDepartment = styled.div`
  font-size: ${(props) => props.theme.fontSizes.md};
  color: ${(props) => props.theme.colors.textSecondary};
`

export const UserInfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const InfoLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: ${(props) => props.theme.fontSizes.md};
  font-weight: ${(props) => props.theme.fontWeights.semiBold}
`

export const InfoValue = styled.div`
  font-size: ${(props) => props.theme.fontSizes.md};
  color: ${(props) => props.theme.colors.textSecondary};
`

export const PhoneLink = styled.a`
  font-size: ${(props) => props.theme.fontSizes.md};
  text-decoration: none;
`


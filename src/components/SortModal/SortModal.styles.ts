import styled from "styled-components"

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(5, 5, 16, 0.16);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`

export const ModalContent = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  border-radius: ${(props) => props.theme.borderRadius.large};
  width: 90%;
  max-width: 373px;
  padding: 24px;
`

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`

export const ModalTitle = styled.h2`
  font-size: ${(props) => props.theme.fontSizes.lg};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  color: ${(props) => props.theme.colors.text};
`

export const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const SortOption = styled.div`
  display: flex;
  align-items: center;
  padding: 14px 0;
  cursor: pointer;
`

export const RadioButton = styled.div<{ checked: boolean }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid ${(props) => (props.checked ? props.theme.colors.primary : props.theme.colors.textTertiary)};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 14px;

  span {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.colors.primary};
  }
`

export const RadioButtonLabel = styled.span`
  font-size: ${(props) => props.theme.fontSizes.md};
  color: ${(props) => props.theme.colors.text};
`


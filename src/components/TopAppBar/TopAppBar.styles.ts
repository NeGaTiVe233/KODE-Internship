import styled from "styled-components"

export const AppBarContainer = styled.div`
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: ${(props) => props.theme.colors.white};
  padding: 16px 16px 0;
  border-bottom: 1px solid ${(props) => props.theme.colors.divider};
`
export const SearchTitle = styled.div`
  font-size: 24px;
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.colors.text};
  margin-bottom: 16px;
`

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.colors.background};
  border-radius: ${(props) => props.theme.borderRadius.medium};
  padding: 8px 12px;
  margin-bottom: 8px;
`

export const SearchInput = styled.input`
  flex: 1;
  border: none;
  background: transparent;
  font-size: ${(props) => props.theme.fontSizes.md};
  outline: none;
  padding: 0 8px;
  color: ${(props) => props.theme.colors.text};

  &::placeholder {
    color: ${(props) => props.theme.colors.textTertiary};
  }
`

export const SearchIcon = styled.div`
  width: 24px;
  height: 24px;
  background-image: url("/search.svg");
  background-repeat: no-repeat;
  background-position: center;
`

export const FilterButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
`

export const TabsContainer = styled.div`
  display: flex;
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  
  &::-webkit-scrollbar {
    display: none;
  }
`

export const Tab = styled.button<{ active: boolean }>`
  position: relative;
  padding: 8px 12px;
  white-space: nowrap;
  font-size: ${(props) => props.theme.fontSizes.md};
  font-weight: ${(props) => (props.active ? props.theme.fontWeights.semiBold : props.theme.fontWeights.medium)};
  color: ${(props) => (props.active ? props.theme.colors.text : props.theme.colors.textTertiary)};
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.2s;
`

export const ActiveIndicator = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: ${(props) => props.theme.colors.primary};
`


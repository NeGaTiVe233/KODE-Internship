import type React from "react"
import { useState } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import { setSearchTerm, setCurrentDepartment } from "../../store/slices/filterSlice"
import { filterUsersBySearch, filterUsersByDepartment } from "../../store/slices/usersSlice"
import type { Department } from "../../api/types"
import {
  AppBarContainer,
  SearchTitle,
  SearchContainer,
  SearchInput,
  SearchIcon,
  FilterButton,
  TabsContainer,
  Tab,
  ActiveIndicator,
} from "./TopAppBar.styles"
import SortModal from "../SortModal/SortModal"

const departmentTabs = [
  { id: "all", label: "Все" },
  { id: "design", label: "Designers" },
  { id: "analytics", label: "Analysts" },
  { id: "management", label: "Managers" },
  { id: "ios", label: "iOS" },
  { id: "android", label: "Android" },
]

const TopAppBar = () => {
  const dispatch = useAppDispatch()
  const { searchTerm, currentDepartment } = useAppSelector((state) => state.filter)
  const [isSortModalOpen, setIsSortModalOpen] = useState(false)

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    dispatch(setSearchTerm(value))
    dispatch(filterUsersBySearch(value))
  }

  const handleTabClick = (department: Department) => {
    dispatch(setCurrentDepartment(department))
    dispatch(filterUsersByDepartment(department))
  }

  const toggleSortModal = () => {
    setIsSortModalOpen(!isSortModalOpen)
  }

  return (
    <AppBarContainer>
      <SearchTitle>Поиск</SearchTitle>
      <SearchContainer>
        <SearchIcon />
        <SearchInput
          type="text"
          placeholder="Введи имя, тег, почту..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <FilterButton onClick={toggleSortModal}>
          <img src="/list.svg" width="24" height="24" alt="Фильтр" />
        </FilterButton>
      </SearchContainer>
      <TabsContainer>
        {departmentTabs.map((tab) => (
          <Tab key={tab.id} active={currentDepartment === tab.id} onClick={() => handleTabClick(tab.id as Department)}>
            {tab.label}
            {currentDepartment === tab.id && <ActiveIndicator />}
          </Tab>
        ))}
      </TabsContainer>
      {isSortModalOpen && <SortModal onClose={toggleSortModal} />}
    </AppBarContainer>
  )
}

export default TopAppBar


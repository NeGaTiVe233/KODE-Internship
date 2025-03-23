import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { Department, SortType } from "../../api/types"

interface FilterState {
  searchTerm: string
  currentDepartment: Department
  sortType: SortType
}

const initialState: FilterState = {
  searchTerm: "",
  currentDepartment: "all",
  sortType: "alphabet",
}

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload
    },
    setCurrentDepartment: (state, action: PayloadAction<Department>) => {
      state.currentDepartment = action.payload
    },
    setSortType: (state, action: PayloadAction<SortType>) => {
      state.sortType = action.payload
    },
  },
})

export const { setSearchTerm, setCurrentDepartment, setSortType } = filterSlice.actions

export default filterSlice.reducer


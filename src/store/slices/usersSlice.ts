import { createSlice, createAsyncThunk, type PayloadAction } from "@reduxjs/toolkit"
import { getUsers } from "../../api/api"
import type { ApiResponse, Department, User } from "../../api/types"

interface UsersState {
  users: User[]
  filteredUsers: User[]
  status: "idle" | "loading" | "succeeded" | "failed"
  error: string | null
}

const initialState: UsersState = {
  users: [],
  filteredUsers: [],
  status: "idle",
  error: null,
}

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (department: Department = "all", { rejectWithValue }) => {
    try {
      const response = await getUsers(department)
      return response
    } catch (error) {
      return rejectWithValue("Какой-то сверхразум всё сломал")
    }
  },
)

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    filterUsersBySearch: (state, action: PayloadAction<string>) => {
      const searchTerm = action.payload.toLowerCase()
      if (searchTerm.length === 0) {
        state.filteredUsers = state.users
      } else {
        state.filteredUsers = state.users.filter((user) => {
          const fullName = `${user.firstName} ${user.lastName}`.toLowerCase()
          const userTag = user.userTag.toLowerCase()
          return fullName.includes(searchTerm) || userTag.includes(searchTerm)
        })
      }
    },
    filterUsersByDepartment: (state, action: PayloadAction<Department>) => {
      if (action.payload === "all") {
        state.filteredUsers = state.users
      } else {
        state.filteredUsers = state.users.filter((user) => user.department === action.payload)
      }
    },
    sortUsersByAlphabet: (state) => {
      state.filteredUsers = [...state.filteredUsers].sort((a, b) => {
        return `${a.firstName} ${a.lastName}`.localeCompare(`${b.firstName} ${b.lastName}`)
      })
    },
    sortUsersByBirthday: (state) => {
      const today = new Date()
      const currentMonth = today.getMonth()
      const currentDay = today.getDate()

      state.filteredUsers = [...state.filteredUsers].sort((a, b) => {
        const dateA = new Date(a.birthday)
        const dateB = new Date(b.birthday)

        const monthA = dateA.getMonth()
        const dayA = dateA.getDate()
        const monthB = dateB.getMonth()
        const dayB = dateB.getDate()

        let daysUntilA = (monthA - currentMonth) * 30 + (dayA - currentDay)
        if (daysUntilA < 0) daysUntilA += 365 

        let daysUntilB = (monthB - currentMonth) * 30 + (dayB - currentDay)
        if (daysUntilB < 0) daysUntilB += 365 

        return daysUntilA - daysUntilB
      })
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading"
      })
      .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<ApiResponse>) => {
        state.status = "succeeded"
        state.users = action.payload.items
        state.filteredUsers = action.payload.items
        state.error = null
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.payload as string
      })
  },
})

export const { filterUsersBySearch, filterUsersByDepartment, sortUsersByAlphabet, sortUsersByBirthday } =
  usersSlice.actions

export default usersSlice.reducer


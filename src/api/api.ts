import axios from "axios"
import type { ApiResponse, Department } from "./types"

const API_BASE_URL = "https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464"

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
})

export const getUsers = async (department: Department = "all") => {
  try {
    const example = department === "all" ? "all" : department
    const response = await api.get<ApiResponse>(`/users?__example=${example}`)
    return response.data
  } catch (error) {
    throw error
  }
}

export const getDynamicUsers = async () => {
  try {
    const response = await api.get<ApiResponse>("/users?__dynamic=true")
    return response.data
  } catch (error) {
    throw error
  }
}

export const getErrorResponse = async () => {
  try {
    const response = await api.get<ApiResponse>("/users?__code=500&__dynamic=true")
    return response.data
  } catch (error) {
    throw error
  }
}


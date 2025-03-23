export interface User {
    id: string
    avatarUrl: string
    firstName: string
    lastName: string
    userTag: string
    department: string
    position: string
    birthday: string
    phone: string
  }
  
  export interface ApiResponse {
    items: User[]
  }
  
  export type Department =
    | "all"
    | "android"
    | "ios"
    | "design"
    | "management"
    | "qa"
    | "back_office"
    | "frontend"
    | "hr"
    | "pr"
    | "backend"
    | "support"
    | "analytics"
  
  export type SortType = "alphabet" | "birthday"
  
  
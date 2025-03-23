import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import { fetchUsers, sortUsersByAlphabet, sortUsersByBirthday } from "../../store/slices/usersSlice"
import UserCard from "../UserCard/UserCard"
import LoadingState from "../LoadingState/LoadingState"
import ErrorState from "../ErrorState/ErrorState"
import EmptySearchState from "../EmptySearchState/EmptySearchState"
import { UserListContainer, YearSeparator } from "./UserList.styles"

const UserList = () => {
  const dispatch = useAppDispatch()
  const { filteredUsers, status, error } = useAppSelector((state) => state.users)
  const { currentDepartment, sortType } = useAppSelector((state) => state.filter)

  useEffect(() => {
    dispatch(fetchUsers(currentDepartment))
  }, [dispatch, currentDepartment])

  useEffect(() => {
    if (sortType === "alphabet") {
      dispatch(sortUsersByAlphabet())
    } else {
      dispatch(sortUsersByBirthday())
    }
  }, [dispatch, sortType])

  if (status === "loading") {
    return <LoadingState />
  }

  if (status === "failed") {
    return <ErrorState message={error || "Произошла ошибка"} />
  }

  if (filteredUsers.length === 0) {
    return <EmptySearchState />
  }

  const renderUserList = () => {
    if (sortType === "alphabet") {
      return filteredUsers.map((user) => <UserCard key={user.id} user={user} />)
    } else {
      const currentDate = new Date()
      const currentYear = currentDate.getFullYear()
      let lastYear: number | null = null

      return filteredUsers.map((user, index) => {
        const birthDate = new Date(user.birthday)
        const birthMonth = birthDate.getMonth()
        const birthDay = birthDate.getDate()
        const currentMonth = currentDate.getMonth()
        const currentDay = currentDate.getDate()

        const isNextYear = birthMonth < currentMonth || (birthMonth === currentMonth && birthDay < currentDay)

        const yearToDisplay = isNextYear ? currentYear + 1 : currentYear

        const needsSeparator = lastYear !== yearToDisplay
        if (needsSeparator) {
          lastYear = yearToDisplay
          return (
            <div key={`${user.id}-group`}>
              {index > 0 && <YearSeparator>{yearToDisplay}</YearSeparator>}
              <UserCard user={user} showBirthday />
            </div>
          )
        }

        return <UserCard key={user.id} user={user} showBirthday />
      })
    }
  }

  return <UserListContainer>{renderUserList()}</UserListContainer>
}

export default UserList


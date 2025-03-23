import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../hooks/redux"
import { fetchUsers } from "../store/slices/usersSlice"
import TopAppBar from "../components/TopAppBar/TopAppBar"
import UserList from "../components/UserList/UserList"
import { HomePageContainer } from "./HomePage.styles"

const HomePage = () => {
  const dispatch = useAppDispatch()
  const { currentDepartment } = useAppSelector((state) => state.filter)

  useEffect(() => {
    dispatch(fetchUsers(currentDepartment))
  }, [dispatch, currentDepartment])

  return (
    <HomePageContainer>
      <TopAppBar />
      <UserList />
    </HomePageContainer>
  )
}

export default HomePage


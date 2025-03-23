import { ErrorContainer, ErrorIcon, ErrorTitle, ErrorMessage, RetryButton } from "./ErrorState.styles"
import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import { fetchUsers } from "../../store/slices/usersSlice"

interface ErrorStateProps {
  message?: string
}

const ErrorState = ({ message = "Какой-то сверхразум всё сломал" }: ErrorStateProps) => {
  const dispatch = useAppDispatch()
  const { currentDepartment } = useAppSelector((state) => state.filter)

  const handleRetry = () => {
    dispatch(fetchUsers(currentDepartment))
  }

  return (
    <ErrorContainer>
      <ErrorIcon>
        <img src="/ufo.svg" width="56" height="56" alt="Ошибка" />
      </ErrorIcon>
      <ErrorTitle>{message}</ErrorTitle>
      <ErrorMessage>Постараемся быстро починить</ErrorMessage>
      <RetryButton onClick={handleRetry}>Попробовать снова</RetryButton>
    </ErrorContainer>
  )
}

export default ErrorState


import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { useAppSelector } from "../hooks/redux"
import type { User } from "../api/types"
import { formatFullDate } from "../utils/dateUtils"
import { calculateAge } from "../utils/dateUtils"
import {
  DetailsContainer,
  BackButton,
  UserHeader,
  UserAvatar,
  UserName,
  UserTag,
  UserDepartment,
  UserInfoSection,
  InfoItem,
  InfoLabel,
  InfoValue,
  PhoneLink,
} from "./UserDetailsPage.styles"

const UserDetailsPage = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { users } = useAppSelector((state) => state.users)
  const [user, setUser] = useState<User | null>(null)
  const [imageError, setImageError] = useState(false)

  useEffect(() => {
    const foundUser = users.find((u) => u.id === id)
    if (foundUser) {
      setUser(foundUser)
    }
  }, [id, users])

  const handleBack = () => {
    navigate(-1)
  }

  const handleImageError = () => {
    setImageError(true)
  }

  if (!user) {
    return (
      <DetailsContainer>
        <BackButton onClick={handleBack}>
          <img src="/back.svg" width="24" height="24" alt="Назад" />
        </BackButton>
        <div>Пользователь не найден</div>
      </DetailsContainer>
    )
  }

  return (
    <DetailsContainer>
      <BackButton onClick={handleBack}>
        <img src="/back.svg" width="24" height="24" alt="Назад" />
      </BackButton>

      <UserHeader>
        <UserAvatar
          src={imageError ? "/goose.png" : user.avatarUrl}
          alt={`${user.firstName} ${user.lastName}`}
          onError={handleImageError}
        />
        <UserName>
          {user.firstName} {user.lastName}
          <UserTag>{user.userTag}</UserTag>
        </UserName>
        <UserDepartment>{user.position}</UserDepartment>
      </UserHeader>

      <UserInfoSection>
        <InfoItem>
          <InfoLabel>
            <img src="/favorite.svg" width="24" height="24" alt="Дата" />
            {formatFullDate(user.birthday)}
          </InfoLabel>
          <InfoValue>{calculateAge(user.birthday)} года</InfoValue>
        </InfoItem>

        <InfoItem>
          <InfoLabel>
            <img src="/phone.svg" width="24" height="24" alt="Дата" />
            <PhoneLink href={`tel:${user.phone}`}>{user.phone}</PhoneLink>
          </InfoLabel>
        </InfoItem>
      </UserInfoSection>
    </DetailsContainer>
  )
}

export default UserDetailsPage


import { Link } from "react-router-dom"
import { useState } from "react"
import type { User } from "../../api/types"
import { formatBirthday } from "../../utils/dateUtils"
import {
  UserCardContainer,
  UserAvatar,
  UserInfo,
  UserName,
  UserTag,
  UserDepartment,
  BirthdayDate,
} from "./UserCard.styles"

interface UserCardProps {
  user: User
  showBirthday?: boolean
}

const getDepartmentLabel = (department: string): string => {
  const departmentMap: Record<string, string> = {
    android: "Android",
    ios: "iOS",
    design: "Designer",
    management: "Manager",
    qa: "QA",
    back_office: "Back Office",
    frontend: "Frontend",
    hr: "HR",
    pr: "PR",
    backend: "Backend",
    support: "Техподдержка",
    analytics: "Аналитик",
  }

  return departmentMap[department] || department
}

const UserCard = ({ user, showBirthday = false }: UserCardProps) => {

  const [imageError, setImageError] = useState(false)

  const handleImageError = () => {
    setImageError(true)
  }

  return (
    <Link to={`/user/${user.id}`}>
      <UserCardContainer>
        <UserAvatar
          src={imageError ? "/goose.png" : user.avatarUrl}
          alt={`${user.firstName} ${user.lastName}`}
          onError={handleImageError}
        />
        <UserInfo>
          <UserName>
            {user.firstName} {user.lastName}
            <UserTag>{user.userTag}</UserTag>
          </UserName>
          <UserDepartment>{getDepartmentLabel(user.department)}</UserDepartment>
        </UserInfo>
        {showBirthday && <BirthdayDate>{formatBirthday(user.birthday)}</BirthdayDate>}
      </UserCardContainer>
    </Link>
  )
}

export default UserCard


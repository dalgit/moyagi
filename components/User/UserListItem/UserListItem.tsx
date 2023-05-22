import { useRouter } from 'next/router'
import React from 'react'
import { userDefaultImage } from '@/constants/defaultImage'
import * as S from './style'

interface UserListItemLayoutProps {
  id: string
  name: string
  image?: string
}

const UserListItem = ({ id, name, image }: UserListItemLayoutProps) => {
  const router = useRouter()
  const handleUserClick = () => {
    router.push(`/users/${id}`)
  }
  const profileImage = image || userDefaultImage

  return (
    <S.UserListItemLayout onClick={handleUserClick}>
      <S.ProfileImage src={profileImage} />
      <S.Name>{name}</S.Name>
    </S.UserListItemLayout>
  )
}

export default UserListItem

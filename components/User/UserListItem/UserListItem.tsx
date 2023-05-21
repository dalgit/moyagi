import { useRouter } from 'next/router'
import React from 'react'
import { userDefaultImage } from '@/constants/defaultImage'
import * as S from './style'

interface UserListItemLayoutProps {
  id: string
  name: string
  image?: string
}

const UserListItem = ({
  id,
  name,
  image = userDefaultImage,
}: UserListItemLayoutProps) => {
  const router = useRouter()

  const handleUserClick = () => {
    router.push(`/users/${id}`)
  }

  return (
    <S.UserListItemLayout onClick={handleUserClick}>
      <S.ProfileImage src={image} />
      <S.Name>{name}</S.Name>
    </S.UserListItemLayout>
  )
}

export default UserListItem

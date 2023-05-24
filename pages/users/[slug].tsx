import { useRouter } from 'next/router'
import React from 'react'
import { NotificationBox, BoxType } from '@/components/common/NotificationBox'
import UserProfile from '@/components/User/UserProfile/UserProfile'
import { useUser } from '@/hooks/queries/useUser'

const UserDetailPage = () => {
  const router = useRouter()
  const { slug } = router.query as { slug: string }
  const { data: user } = useUser(slug)

  if (!user) {
    return (
      <NotificationBox title="존재하지 않는 유저입니다." type={BoxType.sorry} />
    )
  }

  return <UserProfile user={user} />
}

export default UserDetailPage

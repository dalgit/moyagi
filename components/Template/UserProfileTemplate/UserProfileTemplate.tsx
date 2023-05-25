import { useRecoilValue } from 'recoil'
import Button from '@/components/common/Button/Button'
import UserProfile from '@/components/User/UserProfile/UserProfile'
import { userIdSelector } from '@/recoil/user'
import { IUser } from '@/types/user'
import * as S from './style'

interface UserProfileTemplateProps {
  user: IUser
}
const UserProfileTemplate = ({ user }: UserProfileTemplateProps) => {
  const userId = useRecoilValue(userIdSelector) || ''
  const isMe = userId === user._id

  return (
    <S.UserProfileTemplateLayout>
      <UserProfile {...user} />
      {isMe && <Button>내 프로필 수정하기</Button>}
    </S.UserProfileTemplateLayout>
  )
}

export default UserProfileTemplate

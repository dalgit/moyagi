import { Avatar } from 'components/common'
import * as S from './style'

interface ProfileProps {
  name: string
  introduction?: string
  imageUrl?: string
}

const UserProfile = ({
  name,
  introduction = '소개말이 없습니다.',
  imageUrl,
}: ProfileProps) => {
  return (
    <S.UserProfileLayout>
      <Avatar image={imageUrl} size={200} type="user" />
      <h2>{name}</h2>
      <span>{introduction}</span>
    </S.UserProfileLayout>
  )
}

export default UserProfile

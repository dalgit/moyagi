import { withUser } from 'utils/common/withDefaultImage'
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
      <S.ProfileImage src={withUser(imageUrl)} />
      <h2>{name}</h2>
      <span>{introduction}</span>
    </S.UserProfileLayout>
  )
}

export default UserProfile

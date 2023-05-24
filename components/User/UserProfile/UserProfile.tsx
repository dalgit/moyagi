import { userDefaultImage } from '@/constants/defaultImage'
import * as S from './style'

interface ProfileProps {
  name: string
  introduction?: string
  imageUrl?: string
}

const UserProfile = ({
  name,
  introduction = '소개말이 없습니다.',
  imageUrl = userDefaultImage,
}: ProfileProps) => {
  return (
    <S.UserProfileLayout>
      <S.ProfileImage src={imageUrl} alt="profile_image" />
      <h2>{name}</h2>
      <span>{introduction}</span>
    </S.UserProfileLayout>
  )
}

export default UserProfile

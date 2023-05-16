import styled from 'styled-components'
import { userDefaultImage } from '@/constants/defaultImage'
import { useMyInformation } from '@/hooks/queries/useMyInformation'
import FImage from '../common/FImage'

interface ProfileProps {
  name?: string
  imageUrl?: string
  introduction?: string
}

export const MyProfile = () => {
  const { data: user } = useMyInformation()
  return <Profile {...user} />
}

export const Profile = ({ name, imageUrl, introduction }: ProfileProps) => {
  return (
    <UserInformationLayout>
      <ProfileImage src={imageUrl || userDefaultImage} alt="profile_image" />
      <h2>{name}</h2>
      <span>{introduction || '소개말이 없습니다.'}</span>
    </UserInformationLayout>
  )
}

const UserInformationLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`

const ProfileImage = styled(FImage)`
  width: 200px;
  height: 200px;
  border-radius: 50%;
`

import React from 'react'
import styled from 'styled-components'
import { useGetMyInformation } from '@/hooks/queries/useGetMyInformation'
import FImage from '../common/FImage'
import tmp from '/public/assets/tmp.png'

const UserInformation = () => {
  const { data: myInformation } = useGetMyInformation()

  return (
    <UserInformationLayout>
      <ProfileImage src={tmp} alt="profile_image" />
      <h2>{myInformation?.name}</h2>
      <span>이것은 나의 설명입니다.</span>
    </UserInformationLayout>
  )
}

export default UserInformation

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

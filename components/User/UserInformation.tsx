import { useState } from 'react'
import styled from 'styled-components'
import { MyProfile } from './Profile'
import { MyProfileModifyForm } from './ProfileModifyForm'
import Button from '../common/Button'

const UserInformation = () => {
  const [isUpdateForm, setIsUpdateForm] = useState<boolean>(false)

  const handleChangeForm = () => {
    setIsUpdateForm(!isUpdateForm)
  }

  return (
    <UserInformationLayout>
      {isUpdateForm ? (
        <MyProfileModifyForm handleChangeForm={handleChangeForm} />
      ) : (
        <>
          <MyProfile />
          <Button onClick={handleChangeForm}>프로필 변경하기</Button>
        </>
      )}
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

import { useState } from 'react'
import styled from 'styled-components'
import { userDefaultImage } from '@/constants/defaultImage'
import { useUpdateUser } from '@/hooks/mutations/useUpdateUser'
import { useMyInformation } from '@/hooks/queries/useMyInformation'
import useUploadImage from '@/hooks/useUpoladImgae'
import ImageSelector from '../Channel/ChannelCreateForm/ImageSelector'
import Button from '../common/Button'
import Input from '../common/Input'

export const MyProfileModifyForm = ({ handleChangeForm }: any) => {
  const { data: user } = useMyInformation()
  const [introduction, setIntroduction] = useState<string>(
    user?.introduction || '',
  )
  const { setFile, handleImageUpload } = useUploadImage()
  const { mutateAsync: updateUserMutate } = useUpdateUser()

  const handleProfileUpdate = async () => {
    await updateUserMutate({
      introduction,
      imageUrl: await handleImageUpload(),
    })
    handleChangeForm()
  }

  const handleInputChange = (e: any) => {
    setIntroduction(e.target.value)
  }

  return (
    <>
      <UserInformationLayout>
        <ProfileImageSelector
          setFile={setFile}
          defaultImage={user?.imageUrl || userDefaultImage}
        />
        <h2>{user?.name}</h2>
        <Input value={introduction} onChange={handleInputChange} />
      </UserInformationLayout>
      <ButtonWrappper>
        <Button onClick={handleProfileUpdate}>변경</Button>
        <Button onClick={handleChangeForm}>취소</Button>
      </ButtonWrappper>
    </>
  )
}

const ProfileImageSelector = styled(ImageSelector)`
  width: 200px;
`

const UserInformationLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`

const ButtonWrappper = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
  justify-content: space-between;
`

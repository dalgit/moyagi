import { useState } from 'react'
import { useRecoilValue } from 'recoil'
import Button from 'components/common/Button/Button'
import ImageSelector from 'components/common/ImageSelector/ImageSelector'
import Input from 'components/common/Input/Input'
import { userDefaultImage } from 'constants/defaultImage'
import { useUpdateUser } from 'hooks/mutations/useUpdateUser'
import { useUser } from 'hooks/queries/useUser'
import useUploadImage from 'hooks/useUpoladImgae'
import { userIdSelector } from 'recoil/user'
import * as S from './style'
import { ChannelSideBar } from '../../Channel'

const UserEditProfile = () => {
  const userId = useRecoilValue(userIdSelector)
  const { data: user } = useUser(userId)
  const { setFile, handleImageUpload } = useUploadImage()
  const { mutateAsync: updateUserMutate } = useUpdateUser()
  const [introduction, setIntroduction] = useState<string>(
    user?.introduction || '',
  )

  const handleProfileUpdate = async () => {
    await updateUserMutate({
      introduction,
      imageUrl: await handleImageUpload(),
    })
  }

  const handleInputChange = (e: any) => {
    setIntroduction(e.target.value)
  }

  return (
    <S.UserEditProfileLayout>
      <ImageSelector
        setFile={setFile}
        defaultImage={user?.imageUrl || userDefaultImage}
      />
      <h2>{user?.name}</h2>
      <Input value={introduction} onChange={handleInputChange} />
      <Button onClick={handleProfileUpdate}>변경</Button>
    </S.UserEditProfileLayout>
  )
}

export default UserEditProfile

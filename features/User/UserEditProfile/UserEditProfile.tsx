import { useState } from 'react'
import { useRecoilValue } from 'recoil'
import { Button, ImageSelector, Input } from 'components/common'
import { userDefaultImage } from 'constants/defaultImage'
import { useUploadImage } from 'hooks/common'
import { useUpdateUser, useUser } from 'hooks/user'
import userIdSelector from 'recoil/user/userIdSelector'
import * as S from './style'

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

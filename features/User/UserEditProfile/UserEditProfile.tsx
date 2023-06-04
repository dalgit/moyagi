import { useState } from 'react'
import { useRecoilValue } from 'recoil'
import { Button, ImageSelector, Input } from 'components/common'
import { userDefaultImage } from 'constants/defaultImage'
import { useUploadImage } from 'hooks/common'
import { useUpdateUser } from 'hooks/user'
import userAtom from 'recoil/user/userAtom'
import * as S from './style'

const UserEditProfile = () => {
  const {
    name,
    introduction: intro,
    imageUrl: profileImage = userDefaultImage,
  } = useRecoilValue(userAtom)

  const { getUplodedImageUrl } = useUploadImage()
  const { mutateAsync: updateUserMutate } = useUpdateUser()
  const [introduction, setIntroduction] = useState(intro || '')

  const handleProfileUpdate = async () => {
    await updateUserMutate({
      introduction,
      imageUrl: await getUplodedImageUrl(),
    })
  }

  const handleInputChange = (e: any) => {
    setIntroduction(e.target.value)
  }

  return (
    <S.UserEditProfileLayout>
      <ImageSelector defaultImage={profileImage} />
      <h2>{name}</h2>
      <Input value={introduction} onChange={handleInputChange} />
      <Button onClick={handleProfileUpdate}>변경</Button>
    </S.UserEditProfileLayout>
  )
}

export default UserEditProfile

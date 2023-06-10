import { useState, ChangeEvent } from 'react'
import { useRecoilValue } from 'recoil'
import { Button, ImageSelector, Input } from 'components/common'
import { userDefaultImage } from 'constants/defaultImage'
import { useUploadImage } from 'hooks/common'
import useModal from 'hooks/common/useModal'
import { useUpdateUser } from 'hooks/user'
import userAtom from 'recoil/user/userAtom'
import userIdSelector from 'recoil/user/userIdSelector'
import * as S from './style'

const atomKey = 'userEditProfile'

const UserEditProfile = () => {
  const { name, introduction: intro, imageUrl } = useRecoilValue(userAtom)

  const profileImage = imageUrl || userDefaultImage
  const { getFileUrl, removeFile } = useUploadImage()
  const { mutateAsync: updateUserMutate } = useUpdateUser()
  const [introduction, setIntroduction] = useState(intro || '')
  const { closeModal } = useModal()
  const userId = useRecoilValue(userIdSelector)

  const handleProfileUpdate = async () => {
    await updateUserMutate({
      introduction,
      imageUrl: await getFileUrl(atomKey),
      userId,
    })
    removeFile(atomKey)
    closeModal('UserEditProfile')
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIntroduction(e.target.value)
  }

  return (
    <S.UserEditProfileLayout>
      <ImageSelector atomKey={atomKey} defaultImage={profileImage} />
      <h2>{name}</h2>
      <Input value={introduction} onChange={handleInputChange} />
      <Button onClick={handleProfileUpdate}>변경</Button>
    </S.UserEditProfileLayout>
  )
}

export default UserEditProfile

import { useState, ChangeEvent } from 'react'
import { useRecoilValue } from 'recoil'
import { Button, ImageSelector, Input } from 'components/common'
import { useUploadImage } from 'hooks/common'
import useModal from 'hooks/common/useModal'
import { useUpdateUser } from 'hooks/user'
import userAtom from 'recoil/user/userAtom'
import userIdSelector from 'recoil/user/userIdSelector'
import { withUser } from 'utils/common/withDefaultImage'
import * as S from './style'

const fileKey = 'userEditProfile'

const UserEditProfile = () => {
  const { name, introduction: intro = '', imageUrl } = useRecoilValue(userAtom)
  const [introduction, setIntroduction] = useState(intro)

  const { getFileUrl, removeFile } = useUploadImage()
  const { mutateAsync: updateUserMutate } = useUpdateUser()
  const { closeModal } = useModal()
  const userId = useRecoilValue(userIdSelector)

  const handleProfileUpdate = async () => {
    await updateUserMutate({
      introduction,
      imageUrl: await getFileUrl(fileKey),
      userId,
    })
    removeFile(fileKey)
    closeModal('UserEditProfile')
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIntroduction(e.target.value)
  }

  return (
    <S.UserEditProfileLayout>
      <ImageSelector fileKey={fileKey} defaultImage={withUser(imageUrl)} />
      <h2>{name}</h2>
      <Input value={introduction} onChange={handleInputChange} maxLength={50} />
      <Button onClick={handleProfileUpdate}>변경</Button>
    </S.UserEditProfileLayout>
  )
}

export default UserEditProfile

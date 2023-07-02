import { useRecoilValue } from 'recoil'
import { Button, ImageSelector, Input } from 'components/common'
import { useUploadImage } from 'hooks/common'
import useContent from 'hooks/common/useContent'
import useModal from 'hooks/common/useModal'
import { useUpdateUser } from 'hooks/user'
import userAtom from 'recoil/user/userAtom'
import userIdSelector from 'recoil/user/userIdSelector'
import { withUser } from 'utils/common/withDefaultImage'
import * as S from './style'

const fileKey = 'handleProfileUpdate'

const UserProfileEditModal = () => {
  const { name, introduction: intro = '', imageUrl } = useRecoilValue(userAtom)
  const { content, handleContentChange } = useContent(intro)

  const { getFileUrl, removeFile } = useUploadImage()
  const { mutateAsync: updateUserMutate } = useUpdateUser()
  const { closeModal } = useModal()
  const userId = useRecoilValue(userIdSelector)

  const handleProfileUpdate = async () => {
    updateUserMutate({
      introduction: content,
      imageUrl: await getFileUrl(fileKey),
      userId,
    })
    removeFile(fileKey)
    closeModal('UserProfileEditModal')
  }

  return (
    <S.UserProfileEditLayout>
      <ImageSelector fileKey={fileKey} defaultImage={withUser(imageUrl)} />
      <h2>{name}</h2>
      <Input value={content} onChange={handleContentChange} maxLength={50} />
      <Button onClick={handleProfileUpdate}>변경</Button>
    </S.UserProfileEditLayout>
  )
}

export default UserProfileEditModal

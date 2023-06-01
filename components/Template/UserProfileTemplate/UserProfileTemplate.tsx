import { useRecoilValue } from 'recoil'
import { UserProfile } from 'features/User'
import useModal from 'hooks/common/useModal'
import userIdSelector from 'recoil/user/userIdSelector'
import { IUser } from 'types/user'
import * as S from './style'

interface UserProfileTemplateProps {
  user: IUser
}

const UserProfileTemplate = ({ user }: UserProfileTemplateProps) => {
  const userId = useRecoilValue(userIdSelector)
  const isMe = userId === user._id

  const { openModal } = useModal()

  const handleModalOepn = () => {
    openModal('UserEditProfile')
  }

  return (
    <S.UserProfileTemplateLayout>
      <UserProfile {...user} />
      {isMe && (
        <S.Button onClick={handleModalOepn}>내 프로필 수정하기</S.Button>
      )}
    </S.UserProfileTemplateLayout>
  )
}

export default UserProfileTemplate

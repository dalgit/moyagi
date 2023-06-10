import { UserProfile } from 'features/User'
import useCheckMe from 'hooks/common/useCheckMe'
import useModal from 'hooks/common/useModal'
import { IUser } from 'types/user'
import * as S from './style'

interface UserProfileTemplateProps {
  user: IUser
}

const UserProfileTemplate = ({ user }: UserProfileTemplateProps) => {
  const isMe = useCheckMe(user._id)

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

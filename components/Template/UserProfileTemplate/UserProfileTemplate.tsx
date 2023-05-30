import { useState } from 'react'
import { useRecoilValue } from 'recoil'
import { UserProfile, UserEditProfileModal } from 'features/User'
import { userIdSelector } from 'recoil/user'
import { IUser } from 'types/user'
import * as S from './style'

interface UserProfileTemplateProps {
  user: IUser
}

const UserProfileTemplate = ({ user }: UserProfileTemplateProps) => {
  const userId = useRecoilValue(userIdSelector) || ''
  const isMe = userId === user._id
  const [isModalOepn, setIsModalOpen] = useState(false)

  const toggleModal = () => {
    setIsModalOpen(!isModalOepn)
  }

  return (
    <S.UserProfileTemplateLayout>
      <UserProfile {...user} />
      {isMe && <S.Button onClick={toggleModal}>내 프로필 수정하기</S.Button>}

      <UserEditProfileModal
        isModalOpen={isModalOepn}
        closeModal={toggleModal}
      />
    </S.UserProfileTemplateLayout>
  )
}

export default UserProfileTemplate

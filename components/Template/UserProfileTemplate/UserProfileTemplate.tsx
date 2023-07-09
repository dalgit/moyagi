import { useRouter } from 'next/router'
import { useRecoilValue } from 'recoil'
import { UserProfile } from 'features/User'
import useModal from 'hooks/common/useModal'
import { useUser } from 'hooks/user'
import isMeSelector from 'recoil/user/isMe'
import { IUser } from 'types/user'
import * as S from './style'

const UserProfileTemplate = () => {
  const router = useRouter()
  const { slug } = router.query as { slug: string }
  const { data: user = {} as IUser } = useUser(slug, {
    suspense: true,
  })

  const isMe = useRecoilValue(isMeSelector(user?._id))

  return (
    <S.UserProfileTemplateLayout>
      <UserProfile {...user} />
      {isMe && <EventButton />}
    </S.UserProfileTemplateLayout>
  )
}

export default UserProfileTemplate

const EventButton = () => {
  const { openModal } = useModal()

  const handleModalOepn = () => {
    openModal('UserProfileEditModal')
  }

  return <S.Button onClick={handleModalOepn}>프로필 수정하기</S.Button>
}

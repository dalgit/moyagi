import { useRouter } from 'next/router'
import { useRecoilValue } from 'recoil'
import { Spinner } from 'components/common'
import { UserProfile } from 'features/User'
import useModal from 'hooks/common/useModal'
import { useUser } from 'hooks/user'
import isMeSelector from 'recoil/user/isMe'
import * as S from './style'
import NotFoundTemplate from '../NotFoundTemplate/NotFoundTemplate'

const UserProfileTemplate = () => {
  const router = useRouter()
  const { slug } = router.query as { slug: string }
  const { data: user, isLoading, isError } = useUser(slug)
  const isMe = useRecoilValue(isMeSelector(user?._id))

  const { openModal } = useModal()

  const handleModalOepn = () => {
    openModal('UserProfileEditModal')
  }

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <NotFoundTemplate description="유저가 존재하지 않습니다." />
  }

  return (
    <S.UserProfileTemplateLayout>
      <UserProfile {...user} />
      {isMe && <S.Button onClick={handleModalOepn}>프로필 수정하기</S.Button>}
    </S.UserProfileTemplateLayout>
  )
}

export default UserProfileTemplate

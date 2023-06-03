import { Button } from 'components/common'
import useModal from 'hooks/common/useModal'
import * as S from './style'

const ChannelManageMenus = () => {
  const { openModal } = useModal()

  const handleRegistrationsModal = () => {
    openModal('ChannelRegistrationList')
  }

  const handleMembersModal = () => {
    openModal('AdminChannelUserList')
  }

  const handleNoticeModal = () => {
    alert('준비중입니다.')
  }

  return (
    <S.ChannelManageMenusLayout>
      <Button onClick={handleRegistrationsModal}>가입</Button>
      <Button onClick={handleMembersModal}>멤버</Button>
      <Button onClick={handleNoticeModal}>공지</Button>
    </S.ChannelManageMenusLayout>
  )
}

export default ChannelManageMenus

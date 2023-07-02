import { Button } from 'components/common'
import useModal from 'hooks/common/useModal'
import * as S from './style'

const ChannelManageMenus = () => {
  const { openModal } = useModal()

  const handleRegistrationsModal = () => {
    openModal('ChannelRegsModal')
  }

  const handleMembersModal = () => {
    openModal('ManagedMembersModal')
  }

  return (
    <S.MenusLayout>
      <Button onClick={handleRegistrationsModal}>가입</Button>
      <Button onClick={handleMembersModal}>멤버</Button>
    </S.MenusLayout>
  )
}

export default ChannelManageMenus

import { useState } from 'react'
import {
  AiOutlineSetting as SettingIcon,
  AiOutlinePaperClip as ClipIcon,
} from 'react-icons/ai'
import { baseUrl } from 'constants/baseUrl'
import { CHANNEL_PATH } from 'constants/paths'
import { useChannel } from 'hooks/channel'
import { useIsManager } from 'hooks/channel/useChannelData'
import useModal from 'hooks/common/useModal'
import useToast from 'hooks/common/useToast'
import * as S from './style'

const ChannelSideBar = () => {
  const { openModal } = useModal()
  const { onToast } = useToast()
  const { address } = useChannel()
  const isManager = useIsManager()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleSettingModal = () => {
    if (isManager) {
      openModal('ChannelManageMenus')
    } else {
      onToast({ content: '권한이 없습니다.', type: 'error' })
    }
  }

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(`${baseUrl + CHANNEL_PATH}/${address}`)
    onToast({
      content: '복사가 완료되었습니다.',
      type: 'success',
    })
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev)
  }

  return (
    <S.ChannelSideBarLayout>
      <S.PlusIcon onClick={toggleMobileMenu} />
      <S.IconWrapper isMobileMenuOpen={isMobileMenuOpen}>
        <SettingIcon onClick={handleSettingModal} />
        <ClipIcon onClick={handleCopyAddress} />
      </S.IconWrapper>
    </S.ChannelSideBarLayout>
  )
}

export default ChannelSideBar

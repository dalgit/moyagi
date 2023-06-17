import { useState } from 'react'
import {
  AiOutlineSetting as SettingIcon,
  AiOutlinePaperClip as ClipIcon,
} from 'react-icons/ai'
import { useRecoilValue } from 'recoil'
import { baseUrl } from 'constants/baseUrl'
import { CHANNEL_PATH } from 'constants/paths'
import useModal from 'hooks/common/useModal'
import useToast from 'hooks/common/useToast'
import channelAtom from 'recoil/channel/channelAtom'
import { isChannelManagerSelector } from 'recoil/channel/isChannelManagerSelector'
import * as S from './style'

const ChannelSideBar = () => {
  const { openModal } = useModal()
  const { onToast } = useToast()
  const { address } = useRecoilValue(channelAtom)
  const isManager = useRecoilValue(isChannelManagerSelector)
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

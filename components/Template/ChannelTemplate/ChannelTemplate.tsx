import { Suspense } from 'react'
import { useRecoilValue } from 'recoil'
import { Button } from 'components/common'
import Spinner from 'components/common/Spinner/Spinner'
import {
  ChannelDetailCard,
  ChannelPostList,
  ChannelSideBar,
} from 'features/Channel'
import useModal from 'hooks/common/useModal'
import channelSelector from 'recoil/channel/channelSelector'
import { IChannel } from 'types/channel'
import * as S from './style'

interface ChannelTemplateProps {
  channel: IChannel
}

const ChannelTemplate = ({ channel }: ChannelTemplateProps) => {
  const isManager = useRecoilValue(channelSelector)
  const { openModal } = useModal()

  const handleModalOpen = () => {
    openModal('ChannelRegistrationList')
  }

  return (
    <S.ChannelTemplateLayout>
      <S.Wrapper>
        <ChannelDetailCard channel={channel} />
        {isManager && (
          <Button variant="sub" onClick={handleModalOpen}>
            가입관리
          </Button>
        )}
      </S.Wrapper>
      <Suspense fallback={<Spinner />}>
        <ChannelPostList channelId={channel._id} />
      </Suspense>
      <ChannelSideBar />
    </S.ChannelTemplateLayout>
  )
}

export default ChannelTemplate

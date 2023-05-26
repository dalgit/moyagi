import { useState } from 'react'
import { ChannelList } from 'features/Channel'
import { ChannelRegistrationList } from 'features/Registration'
import { AdminUserList } from 'features/User'
import * as S from './style'

const UserChannelsTemplate = ({ channels }: any) => {
  const [currentChannelId, setCurrentChannelId] = useState<string>('')

  const handleChannelClick = (channelId: string) => {
    setCurrentChannelId(channelId)
  }

  return (
    <S.UserChannelsTemplateLayout>
      <div>
        <h3>운영중인 채널</h3>
        <ChannelList channels={channels} onItemClick={handleChannelClick} />
      </div>
      <div>
        <h3>가입 신청 관리</h3>
        <ChannelRegistrationList channelId={currentChannelId} />
      </div>
      <div>
        <h3>멤버 관리</h3>
        <AdminUserList channelId={currentChannelId} />
      </div>
    </S.UserChannelsTemplateLayout>
  )
}

export default UserChannelsTemplate

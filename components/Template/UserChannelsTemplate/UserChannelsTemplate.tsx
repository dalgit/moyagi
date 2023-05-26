import ChannelList from 'components/Channel/ChannelList/ChannelList'
import ChannelRegistrationList from 'components/Features/Registration/ChannelRegistrationList/ChannelRegistrationList'
import { useState } from 'react'
import styled from 'styled-components'
import AdminUserList from 'features/User/AdminUserList/AdminUserList'
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
      <As>
        <div>
          <h3>가입 신청 관리</h3>
          <ChannelRegistrationList channelId={currentChannelId} />
        </div>
        <div>
          <h3>멤버 관리</h3>
          <AdminUserList channelId={currentChannelId} />
        </div>
      </As>
    </S.UserChannelsTemplateLayout>
  )
}

export default UserChannelsTemplate

const As = styled.div`
  display: flex;
  justify-content: space-between;
`

import { useRouter } from 'next/router'
import React from 'react'
import { useRecoilValue } from 'recoil'
import ChannelList from '@/components/Channel/ChannelList/ChannelList'
import ManagedCahnnels from '@/components/Channel/ManagedCahnnels/ManagedCahnnels'
import { useUserChannels } from '@/hooks/queries/useUserChannels'
import { userIdSelector } from '@/recoil/user'
import { useChannelsFilter } from '@/components/Channel/ChannelList/hooks'
const UserChannelsPage = () => {
  return (
    <div>
      <ManagedCahnnels />
      <div>채널</div>
      <div>가입 신청 관리</div>
      <div>멤버 관리</div>
    </div>
  )
}

export default UserChannelsPage

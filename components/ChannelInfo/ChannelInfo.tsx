import styled from 'styled-components'
import { IChannel } from '@/types/channel'
import Card from '../common/Ui/Card'

interface ChannelInfoProps {
  channel: IChannel
}

const ChannelInfo = ({ channel }: ChannelInfoProps) => {
  const { name, description, manager, address, members } = channel
  const memberCount = members.length
  return (
    <ChannelInfoLayout>
      <Card
        width="100%"
        title={name}
        href={address}
        imageSrc="/assets/a.jpg"
        hasBoxShadow={false}
      />
      <Description>{description}</Description>
      <Member>매니저 {manager.name}</Member>
      <Member>멤버 {memberCount}명</Member>
    </ChannelInfoLayout>
  )
}

export default ChannelInfo

const ChannelInfoLayout = styled.div`
  width: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 5px;
`

const Description = styled.span`
  font-size: 14px;
`

const Member = styled.span`
  font-size: 12px;
  width: 100%;
  text-align: right;
  color: gray;
`

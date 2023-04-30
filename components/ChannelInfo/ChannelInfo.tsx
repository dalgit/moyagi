import { useState } from 'react'
import styled from 'styled-components'
import { IChannel } from '@/types/channel'
import Card from '../common/Ui/Card'
import List from '../common/Ui/List'
import ListItem from '../common/Ui/ListItem'
import ModalFrame from '../Modal/ModalFrame'

interface ChannelInfoProps {
  channel: IChannel
}

const ChannelInfo = ({ channel }: ChannelInfoProps) => {
  const { name, description, manager, address, members } = channel
  const memberCount = members.length
  const [isModalOpen, setIsModalActive] = useState<boolean>(false)

  const toggleModal = () => setIsModalActive(!isModalOpen)

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
      <Member onClick={toggleModal}>멤버 {memberCount}명</Member>

      <ModalFrame isModalOpen={isModalOpen} closeModal={toggleModal}>
        <h2>Members</h2>
        <StyledList>
          {members.map((member) => (
            <ListItem
              key={channel._id}
              title={member.name}
              imageSrc="/assets/a.jpg"
            />
          ))}
        </StyledList>
      </ModalFrame>
    </ChannelInfoLayout>
  )
}

export default ChannelInfo

const StyledList = styled(List)`
  width: 350px;

  max-height: 200px;
`
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

  cursor: pointer;
`

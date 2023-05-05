import React from 'react'
import styled from 'styled-components'
import { useDeleteRegistration } from '@/hooks/mutations/useDeleteRegistration'
import { usePatchRegistrationStatus } from '@/hooks/mutations/usePatchRegistrationStatus'
import { IRegistration, EStatus } from '@/types/registration'
import RegistrationHeader from './RegistrationHeader'
import Button from '../common/Ui/Button'
interface RegistrationProps {
  registration: IRegistration
}

export const AdminRegistration = ({ registration }: RegistrationProps) => {
  const {
    _id: registrationId,
    message,
    status,
    time,
    channel,
    requester,
  } = registration
  const { _id: channelId } = channel

  const isPending = status === EStatus.PENDING
  const { mutate: patchRegistrationStatusMutate } = usePatchRegistrationStatus()

  const handleButtonClick = async (status: EStatus) => {
    patchRegistrationStatusMutate({
      registrationId,
      channelId,
      status,
    })
  }

  return (
    <RegistrationLayout status={status}>
      <RegistrationHeader name={requester.name} status={status} date={time} />
      <Message>{message}</Message>
      {isPending && (
        <Buttons>
          <Button onClick={() => handleButtonClick(EStatus.APPROVE)}>
            승인
          </Button>
          <Button onClick={() => handleButtonClick(EStatus.REJECT)}>
            거절
          </Button>
        </Buttons>
      )}
    </RegistrationLayout>
  )
}

export const Registration = ({ registration }: RegistrationProps) => {
  const { _id: registrationId, message, status, time, channel } = registration
  const { _id: channelId } = channel

  const isPending = status === EStatus.PENDING

  const { mutate: deleteRegistrationMutate } = useDeleteRegistration()

  const handleButtonClick = () => {
    deleteRegistrationMutate({ registrationId, channelId })
  }

  return (
    <RegistrationLayout status={status}>
      <RegistrationHeader name={channel.name} status={status} date={time} />
      <Message>{message}</Message>
      {isPending && (
        <CancleButton onClick={handleButtonClick}>취소</CancleButton>
      )}
    </RegistrationLayout>
  )
}

const RegistrationLayout = styled.div<{ status: string }>`
  padding: 10px;
  width: 100%;
  background-color: white;
  border: 0.5px solid rgba(27, 31, 35, 0.15);
  opacity: ${({ status }) => status !== 'pending' && 0.3};

  position: relative;
`

const Message = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
`

const Buttons = styled.div`
  position: absolute;
  right: 5px;
  bottom: 5px;
`

const CancleButton = styled(Button)`
  width: 40px;
  font-size: 10px;

  position: absolute;
  right: 5px;
  bottom: 5px;
`

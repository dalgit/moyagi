import { IChannel } from '@/types/channel'
import * as S from './style'

interface RegistrationListItemProps {
  id: string
  message: string
  status: string
  time: Date
  channel: IChannel
}

const RegistrationListItem = ({
  id,
  message,
  status,
  time,
  channel,
}: RegistrationListItemProps) => {
  const { _id: channelId } = channel
  const isPending = status === EStatus.PENDING

  const { mutate: deleteRegistrationMutate } = useDeleteRegistration()

  const handleButtonClick = () => {
    deleteRegistrationMutate({ registrationId, channelId })
  }

  return (
    <S.RegistrationLayout status={status}>
      <S.RegistrationHeader name={channel.name} status={status} date={time} />
      <S.Message>{message}</S.Message>
      {isPending && (
        <S.CancleButton onClick={handleButtonClick}>취소</S.CancleButton>
      )}
    </S.RegistrationLayout>
  )
}

export default RegistrationListItem

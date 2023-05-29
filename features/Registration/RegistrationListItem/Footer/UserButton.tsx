import { useDeleteRegistration } from 'hooks/registration/useDeleteRegistration'
import * as S from './style'

interface UserButtonsProps {
  registrationId: string
  channelId: string
}

const UserButtons = ({ registrationId, channelId }: UserButtonsProps) => {
  const { mutate: deleteRegistrationMutate } = useDeleteRegistration()

  const handleButtonClick = () => {
    deleteRegistrationMutate({ registrationId, channelId })
  }

  return <S.CancleButton onClick={handleButtonClick}>취소</S.CancleButton>
}

export default UserButtons

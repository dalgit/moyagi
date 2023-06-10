import { useRecoilValue } from 'recoil'
import { useDeleteRegistration } from 'hooks/registration'
import userIdSelector from 'recoil/user/userIdSelector'
import * as S from './style'

interface UserButtonsProps {
  registrationId: string
}

const UserButtons = ({ registrationId }: UserButtonsProps) => {
  const { mutate: deleteRegistrationMutate } = useDeleteRegistration()
  const userId = useRecoilValue(userIdSelector)

  const handleButtonClick = () => {
    if (window.confirm('정말 취소할까요?')) {
      deleteRegistrationMutate({ userId, registrationId })
    }
  }

  return <S.CancleButton onClick={handleButtonClick}>취소</S.CancleButton>
}

export default UserButtons

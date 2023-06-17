import { useRecoilValue } from 'recoil'
import { MoreMenu } from 'components/common'
import { useDeleteRegistration } from 'hooks/registration'
import userIdSelector from 'recoil/user/userIdSelector'

interface UserButtonsProps {
  registrationId: string
}

const RequesterMenus = ({ registrationId }: UserButtonsProps) => {
  const { mutate: deleteRegistrationMutate } = useDeleteRegistration()
  const userId = useRecoilValue(userIdSelector)

  const handleButtonClick = () => {
    if (window.confirm('정말 취소할까요?')) {
      deleteRegistrationMutate({ userId, registrationId })
    }
  }

  return (
    <MoreMenu>
      <li onClick={handleButtonClick}>취소</li>
    </MoreMenu>
  )
}

export default RequesterMenus

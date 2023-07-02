import { MoreMenu } from 'components/common'
import { useChannel } from 'hooks/channel'
import { useUpdateRegistration } from 'hooks/registration'
import { EStatus } from 'types/registration'

interface AdminButtonsProps {
  registrationId: string
}

const AdminMenus = ({ registrationId }: AdminButtonsProps) => {
  const { mutate: patchRegistrationStatusMutate } = useUpdateRegistration()
  const { _id: channelId } = useChannel()

  const handleButtonClick = async (status: EStatus) => {
    patchRegistrationStatusMutate({
      registrationId,
      channelId,
      status,
    })
  }

  return (
    <MoreMenu>
      <li onClick={() => handleButtonClick(EStatus.APPROVE)}>승인</li>
      <li onClick={() => handleButtonClick(EStatus.REJECT)}>거절</li>
    </MoreMenu>
  )
}

export default AdminMenus

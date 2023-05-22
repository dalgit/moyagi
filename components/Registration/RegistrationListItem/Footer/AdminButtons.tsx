import Button from '@/components/common/Button'
import { usePatchRegistrationStatus } from '@/hooks/mutations/usePatchRegistrationStatus'
import { EStatus } from '@/types/registration'

interface AdminButtonsProps {
  registrationId: string
  channelId: string
}

const AdminButtons = ({ registrationId, channelId }: AdminButtonsProps) => {
  const { mutate: patchRegistrationStatusMutate } = usePatchRegistrationStatus()

  const handleButtonClick = async (status: EStatus) => {
    patchRegistrationStatusMutate({
      registrationId,
      channelId,
      status,
    })
  }

  return (
    <div>
      <Button onClick={() => handleButtonClick(EStatus.APPROVE)}>승인</Button>
      <Button onClick={() => handleButtonClick(EStatus.REJECT)}>거절</Button>
    </div>
  )
}

export default AdminButtons

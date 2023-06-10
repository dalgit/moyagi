import { useRecoilValue } from 'recoil'
import { Button } from 'components/common'
import { useUpdateRegistration } from 'hooks/registration'
import channelIdSelector from 'recoil/channel/channelIdSelector'
import { EStatus } from 'types/registration'

interface AdminButtonsProps {
  registrationId: string
}

const AdminButtons = ({ registrationId }: AdminButtonsProps) => {
  const { mutate: patchRegistrationStatusMutate } = useUpdateRegistration()
  const channelId = useRecoilValue(channelIdSelector)

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

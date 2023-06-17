import { useRecoilValue } from 'recoil'
import { MoreMenu } from 'components/common'
import { useUpdateRegistration } from 'hooks/registration'
import channelIdSelector from 'recoil/channel/channelIdSelector'
import { EStatus } from 'types/registration'

interface AdminButtonsProps {
  registrationId: string
}

const AdminMenus = ({ registrationId }: AdminButtonsProps) => {
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
    <MoreMenu>
      <li onClick={() => handleButtonClick(EStatus.APPROVE)}>승인</li>
      <li onClick={() => handleButtonClick(EStatus.REJECT)}>거절</li>
    </MoreMenu>
  )
}

export default AdminMenus

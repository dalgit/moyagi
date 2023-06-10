import { useRecoilValue } from 'recoil'
import userIdSelector from 'recoil/user/userIdSelector'
import { EStatus } from 'types/registration'
import { IUser } from 'types/user'
import AdminButtons from './AdminButtons'
import UserButtons from './UserButton'

interface RegistrationListItemFooterProps {
  registrationId: string
  status: EStatus
  requester: IUser
}

const RegistrationListItemFooter = ({
  registrationId,
  status,
  requester,
}: RegistrationListItemFooterProps) => {
  const userId = useRecoilValue(userIdSelector)

  const isRequester = requester._id === userId
  const isPending = status === EStatus.PENDING

  if (!isPending) return null

  const Buttons = isRequester ? UserButtons : AdminButtons

  return <Buttons registrationId={registrationId} />
}

export default RegistrationListItemFooter

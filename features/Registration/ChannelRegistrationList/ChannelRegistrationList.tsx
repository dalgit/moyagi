import { useRecoilValue } from 'recoil'
import { NotificationBox } from 'components/common'
import { useChannelRegistrations } from 'hooks/registration'
import channelAtom from 'recoil/channel/channelAtom'
import RegistrationList from '../RegistrationList/RegistrationList'

const ChannelRegistrationList = () => {
  const { _id: channelId } = useRecoilValue(channelAtom)
  const { data: registrations = [] } = useChannelRegistrations(channelId)

  if (!registrations.length) {
    return (
      <NotificationBox
        title="채널의 가입신청서가 존재하지 않습니다."
        type="sorry"
      />
    )
  }

  return <RegistrationList registrations={registrations} />
}

export default ChannelRegistrationList

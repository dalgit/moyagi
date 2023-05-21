import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { userSelector } from '@/recoil/user'
import { IChannel } from '@/types/channel'
import { IUser } from '@/types/user'

export const useMember = (channel: IChannel): any => {
  const user = useRecoilValue(userSelector)
  const [isMember, setIsMember] = useState<boolean>(false)
  const { push } = useRouter()

  useEffect(() => {
    if (channel && user) {
      const foundMember = channel.members.some(
        (member: IUser) => member._id === user._id,
      )
      setIsMember(foundMember)
    }
  }, [channel, user])

  const checkMember = () => {
    if (!isMember) {
      return push('/login')
    }
  }

  return [isMember, checkMember]
}

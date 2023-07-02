import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import React from 'react'
import { useRecoilValue } from 'recoil'
import { useIsMember } from 'hooks/channel/useChannelData'
import { useModal } from 'hooks/common'
import userIdSelector from 'recoil/user/userIdSelector'

const Button = dynamic(
  () => import('components/common').then((module) => module.Button),
  { ssr: false },
)

const ChannelDetailCardButton = () => {
  const router = useRouter()
  const isMember = useIsMember()
  const userId = useRecoilValue(userIdSelector)

  const { openModal } = useModal()

  const handleButtonClick = () => {
    if (isMember) {
      return openModal('PostCreateForm')
    }

    if (userId) {
      return openModal('RegistrationForm')
    }

    return router.push(`/login`)
  }

  const buttonText = isMember ? '작성하기' : '가입하기'

  return <Button onClick={handleButtonClick}>{buttonText}</Button>
}

export default ChannelDetailCardButton

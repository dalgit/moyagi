import { useState, ChangeEvent } from 'react'
import { Button } from 'components/common'
import TextArea from 'components/common/TextArea/TextArea'
import ToolTip from 'components/common/ToolTIp/ToolTip'
import { useChannel } from 'hooks/channel'
import useModal from 'hooks/common/useModal'
import { useCreateRegistration } from 'hooks/registration'
import * as S from './style'

const RegistrationForm = () => {
  const { _id: channelId, isPublic } = useChannel()

  const { mutate: createRegistrationMutate } = useCreateRegistration()
  const [message, setMessage] = useState<string>('')
  const { closeModal } = useModal()

  const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value)
  }

  const handleRegistration = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (message === '') return
    createRegistrationMutate({ channelId, message, isPublic })
    closeModal('RegistrationForm')
  }

  return (
    <form onSubmit={handleRegistration}>
      <S.Wrapper>
        <span>채널 가입 신청</span>
        <ToolTip
          type="question"
          content="비공개 채널의 경우, 관리자의 승인이 필요합니다."
        />
      </S.Wrapper>
      <div>
        <TextArea
          rows={3}
          maxLine={3}
          placeholder="메시지를 작성해주세요"
          value={message}
          onChange={handleMessageChange}
        />
        <Button type="submit">제출하기</Button>
      </div>
    </form>
  )
}

export default RegistrationForm

import { Button } from 'components/common'
import TextArea from 'components/common/TextArea/TextArea'
import ToolTip from 'components/common/ToolTIp/ToolTip'
import { useChannel } from 'hooks/channel'
import useContent from 'hooks/common/useContent'
import useModal from 'hooks/common/useModal'
import { useCreateRegistration } from 'hooks/registration'
import * as S from './style'

const RegistrationForm = () => {
  const { _id: channelId, isPublic } = useChannel()
  const { mutate: createRegistrationMutate } = useCreateRegistration()

  const {
    content: message,
    handleContentChange,
    handleContentSubmit,
  } = useContent('')

  const { closeModal } = useModal()

  const handleRegistration = () => {
    handleContentSubmit(() => {
      createRegistrationMutate({ channelId, message, isPublic })
      closeModal('RegistrationForm')
    })
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        handleRegistration()
      }}
    >
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
          onChange={handleContentChange}
        />
        <Button type="submit">제출하기</Button>
      </div>
    </form>
  )
}

export default RegistrationForm

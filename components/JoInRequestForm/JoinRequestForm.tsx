import useForm from '@/hooks/useForm'
import client from '@/utils/axios/axios'
import ModalFrame from '../Modal/ModalFrame'

interface JoinRequestFormProps {
  isModalOpen: boolean
  channelId: string
  isPublic: boolean
  closeModal: () => void
}

const JoinRequestForm = ({
  isModalOpen,
  channelId,
  isPublic,
  closeModal,
}: JoinRequestFormProps) => {
  const { form, updateForm } = useForm<{ [key: string]: string }>({
    message: '',
  })

  const handleJoinRequest = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    client
      .post('/joinRequest', {
        message: form.message,
        channelId,
        isPublic,
      })
      .catch((e) => {
        console.log(e.response.data.errorType)
      })
  }

  return (
    <ModalFrame isModalOpen={isModalOpen} closeModal={closeModal}>
      <form onSubmit={handleJoinRequest}>
        <p>채널 가입 신청</p>
        <div>
          <input
            type="text"
            id="message"
            name="message"
            placeholder="메시지를 작성해주세요"
            value={form.message}
            onChange={updateForm}
          />
          <button type="button" onClick={closeModal}>
            취소
          </button>
          <button type="submit">제출하기</button>
        </div>
      </form>
    </ModalFrame>
  )
}

export default JoinRequestForm

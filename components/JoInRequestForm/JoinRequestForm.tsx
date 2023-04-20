import useForm from '@/hooks/useForm'
import client from '@/utils/axios/axios'

interface JoinRequestFormProps {
  channelId: string
  isPublic: boolean
  closeModal: () => void
}

const JoinRequestForm = ({
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
      .post(`/channels/${channelId}/join-requests`, {
        message: form.message,
        isPublic,
      })
      .catch((e) => {
        console.log(e.response.data.errorType)
      })
  }

  return (
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
  )
}

export default JoinRequestForm

import { useCreateJoinRequest } from '@/hooks/mutations/useCreateJoinRequest'
import useForm from '@/hooks/useForm'

interface JoinRequestFormProps {
  channelId: string
  isPublic: boolean
}

const JoinRequestForm = ({ channelId, isPublic }: JoinRequestFormProps) => {
  const { mutate: createJoinRequestMutate } = useCreateJoinRequest()
  const { form, updateForm } = useForm<{ [key: string]: string }>({
    message: '',
  })

  const handleJoinRequest = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    createJoinRequestMutate({ channelId, message: form.message, isPublic })
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
        <button type="submit">제출하기</button>
      </div>
    </form>
  )
}

export default JoinRequestForm

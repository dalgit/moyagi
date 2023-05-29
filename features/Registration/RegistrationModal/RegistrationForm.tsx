import { useForm } from 'hooks/common'
import { useCreateRegistration } from 'hooks/registration'

interface RegistrationFormProps {
  channelId: string
  isPublic: boolean
}

const RegistrationForm = ({ channelId, isPublic }: RegistrationFormProps) => {
  const { mutate: createRegistrationMutate } = useCreateRegistration()
  const { form, updateForm } = useForm<{ [key: string]: string }>({
    message: '',
  })

  const handleRegistration = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    createRegistrationMutate({ channelId, message: form.message, isPublic })
  }

  return (
    <form onSubmit={handleRegistration}>
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

export default RegistrationForm

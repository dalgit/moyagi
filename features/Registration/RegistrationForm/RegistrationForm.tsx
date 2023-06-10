import { useRecoilValue } from 'recoil'
import { useForm } from 'hooks/common'
import useModal from 'hooks/common/useModal'
import { useCreateRegistration } from 'hooks/registration'
import channelAtom from 'recoil/channel/channelAtom'

const RegistrationForm = () => {
  const { _id: channelId, isPublic } = useRecoilValue(channelAtom)
  const { mutate: createRegistrationMutate } = useCreateRegistration()
  const { closeModal } = useModal()
  const { form, updateForm } = useForm<{ [key: string]: string }>({
    message: '',
  })

  const handleRegistration = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    createRegistrationMutate({ channelId, message: form.message, isPublic })
    closeModal('RegistrationForm')
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

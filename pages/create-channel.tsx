import { useCreateChannel } from '@/hooks/mutations/useCreateChannel'
import useForm from '@/hooks/useForm'

const CreateChannelPage = () => {
  const { form, updateForm } = useForm<{ [key: string]: string }>({
    name: '',
    address: '',
    description: '',
    isPublic: 'true',
  })

  const { mutate: createChannelMutate } = useCreateChannel()
  const handleCreateChannel = async (
    e: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault()

    createChannelMutate({
      name: form.name,
      address: form.address,
      description: form.description,
      isPublic: JSON.parse(form.isPublic),
    })
  }

  return (
    <form onSubmit={handleCreateChannel}>
      <div>채널 만들기</div>
      <div>
        <label htmlFor="name">채널 이름</label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={updateForm}
        />
      </div>
      <div>
        <label htmlFor="address">채널 주소</label>
        <input
          type="text"
          id="address"
          name="address"
          value={form.address}
          onChange={updateForm}
        />
      </div>

      <div>
        <label htmlFor="description">채널 설명</label>
        <input
          type="text"
          id="description"
          name="description"
          value={form.description}
          onChange={updateForm}
        />
      </div>

      <div>
        <p>채널 공개 여부</p>
        <label htmlFor="public">공개</label>
        <input
          type="radio"
          id="public"
          name="isPublic"
          value="true"
          checked={form.isPublic === 'true'}
          onChange={updateForm}
        />
        <label htmlFor="private">비공개</label>
        <input
          type="radio"
          id="private"
          name="isPublic"
          value="false"
          checked={form.isPublic === 'false'}
          onChange={updateForm}
        />
      </div>
      <button type="submit">만들기</button>
    </form>
  )
}

export default CreateChannelPage

import axios from 'axios'
import useForm from '@/hooks/useForm'

const CreateChannelPage = () => {
  const { form, updateForm } = useForm<{ [key: string]: string }>({
    name: '',
    description: '',
    publicStatus: 'public',
  })

  const handleCreateChannel = async (
    e: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault()

    try {
      await axios.post('/api/createChannel', {
        name: form.name,
        description: form.description,
        publicStatus: form.publicStatus,
      })
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <form onSubmit={handleCreateChannel}>
      <div>채널 만들기</div>
      <div>
        <label htmlFor="name">채널 이름</label>
        <input
          type="text"
          name="name"
          value={form.name}
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
          name="publicStatus"
          value="public"
          checked={form.publicStatus === 'public'}
          onChange={updateForm}
        />
        <label htmlFor="private">비공개</label>
        <input
          type="radio"
          id="private"
          name="publicStatus"
          value="private"
          checked={form.publicStatus === 'private'}
          onChange={updateForm}
        />
      </div>
      <button type="submit">만들기</button>
    </form>
  )
}

export default CreateChannelPage

import styled from 'styled-components'
import Button from '@/components/common/Button'
import Input from '@/components/common/Input'
import Radio from '@/components/common/Radio/Radio'
import Radios from '@/components/common/Radio/Radios'
import { useCreateChannel } from '@/hooks/mutations/useCreateChannel'
import useForm from '@/hooks/useForm'
import useUploadImage from '@/hooks/useUpoladImgae'
import ImageSelector from '../../common/ImageSelector/ImageSelector'

const initailForm = {
  name: '',
  address: '',
  description: '',
  isPublic: 'true',
  imgSrc: '',
}

const ChannelCreateForm = () => {
  const { form, updateForm } = useForm<{ [key: string]: string }>(initailForm)
  const { mutate: createChannelMutate } = useCreateChannel()
  const { setFile, handleImageUpload } = useUploadImage()

  const handleCreateChannel = async (
    e: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault()
    const imageUrl = await handleImageUpload()

    createChannelMutate({
      name: form.name,
      address: form.address,
      description: form.description,
      isPublic: JSON.parse(form.isPublic),
      imageUrl: imageUrl,
    })
  }

  return (
    <ChannelCreateFormLayout>
      <h2>Create channel</h2>
      <Form onSubmit={handleCreateChannel}>
        <ImageSelector setFile={setFile} />
        <Wrapper>
          <Input label="이름" id="name" onChange={updateForm} />
          <Input label="주소" id="address" onChange={updateForm} />
          <Input label="설명" id="description" onChange={updateForm} />
          <Radios
            label="공개 여부"
            name="isPublic"
            currentValue={form.isPublic}
            onChange={updateForm}
          >
            <Radio label="공개" id="public" value="true" />
            <Radio label="비공개" id="private" value="false" />
          </Radios>
          <Button type="submit">생성</Button>
        </Wrapper>
      </Form>
    </ChannelCreateFormLayout>
  )
}

export default ChannelCreateForm

const ChannelCreateFormLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

const Form = styled.form`
  width: 100%;
  display: flex;
  gap: 30px;
  align-items: center;
  padding: 10px 250px;
`

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`

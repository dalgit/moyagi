import Button from 'components/common/Button/Button'
import ImageSelector from 'components/common/ImageSelector/ImageSelector'
import Input from 'components/common/Input/Input'
import Radio from 'components/common/Radio/Radio'
import Radios from 'components/common/Radio/Radios'
import { useCreateChannel } from 'hooks/mutations/useCreateChannel'
import useForm from 'hooks/useForm'
import useUploadImage from 'hooks/useUpoladImgae'
import * as S from './style'
import ChannelCard from '../ChannelCard'
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
    <S.Form onSubmit={handleCreateChannel}>
      <ImageSelector setFile={setFile} />
      <S.Wrapper>
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
      </S.Wrapper>
    </S.Form>
  )
}

export default ChannelCreateForm

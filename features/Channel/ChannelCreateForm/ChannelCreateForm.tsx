import { Button, ImageSelector, Input, Radio, Radios } from 'components/common'
import { useCreateChannel } from 'hooks/channel'
import { useForm, useUploadImage } from 'hooks/common'
import * as S from './style'

const atomKey = 'channelProfile'

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
  const { getFileUrl } = useUploadImage()

  const handleCreateChannel = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    createChannelMutate({
      name: form.name,
      address: form.address,
      description: form.description,
      isPublic: JSON.parse(form.isPublic),
      imageUrl: await getFileUrl(atomKey),
    })
  }

  return (
    <S.Form onSubmit={handleCreateChannel}>
      <ImageSelector atomKey={atomKey} />
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
    </S.Form>
  )
}

export default ChannelCreateForm

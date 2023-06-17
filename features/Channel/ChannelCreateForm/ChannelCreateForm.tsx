import { Button, ImageSelector, Input, Radio, Radios } from 'components/common'
import { useCreateChannel } from 'hooks/channel'
import { useForm, useToast, useUploadImage } from 'hooks/common'
import channelValidations from 'utils/validations/channel'
import * as S from './style'

const fileKey = 'channelProfile'

const initailForm = {
  name: '',
  address: '',
  description: '',
  isPublic: 'true',
  imgSrc: '',
}

const validationFunctions = {
  ...channelValidations,
}

const ChannelCreateForm = () => {
  const { form, updateForm, isAllValid } = useForm(
    initailForm,
    validationFunctions,
  )

  const { mutate: createChannelMutate } = useCreateChannel()
  const { getFileUrl } = useUploadImage()
  const { onToast } = useToast()

  const handleCreateChannel = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (isAllValid()) {
      createChannelMutate({
        ...form,
        isPublic: JSON.parse(form.isPublic),
        imageUrl: await getFileUrl(fileKey),
      })
    } else {
      onToast({ content: '부적절한 입력입니다.', type: 'error' })
    }
  }

  return (
    <S.Form onSubmit={handleCreateChannel}>
      <ImageSelector fileKey={fileKey} />
      <Input
        label="이름"
        id="name"
        placeholder="14자 이내"
        maxLength={14}
        onChange={updateForm}
      />
      <Input
        label="주소"
        id="address"
        placeholder="영문, 숫자, '-'의 조합 20자 이내"
        maxLength={20}
        onChange={updateForm}
      />
      <Input
        label="설명"
        id="description"
        placeholder="40자 이내"
        maxLength={40}
        onChange={updateForm}
      />
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

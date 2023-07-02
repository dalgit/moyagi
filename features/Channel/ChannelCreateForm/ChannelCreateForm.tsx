import {
  Button,
  ImageSelector,
  Radio,
  Radios,
  ValidInput,
} from 'components/common'
import { useCreateChannel } from 'hooks/channel'
import { useForm, useUploadImage } from 'hooks/common'
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

const ChannelCreateForm = () => {
  const { form, updateForm, isValid, handleSubmit } = useForm(
    initailForm,
    channelValidations,
  )

  const { mutate: createChannelMutate } = useCreateChannel()
  const { getFileUrl } = useUploadImage()

  const handleCreateChannel = () => {
    handleSubmit(async () => {
      createChannelMutate({
        ...form,
        isPublic: JSON.parse(form.isPublic),
        imageUrl: await getFileUrl(fileKey),
      })
    })
  }

  return (
    <S.Form
      onSubmit={(e) => {
        e.preventDefault()
        handleCreateChannel()
      }}
    >
      <ImageSelector fileKey={fileKey} />
      <ValidInput
        label="이름"
        id="name"
        placeholder="14자 이내"
        maxLength={14}
        onChange={updateForm}
        errorText="이름이 올바르지 않습니다."
        isValid={isValid.name}
      />
      <ValidInput
        label="주소"
        id="address"
        placeholder="영문, 숫자, '-'의 조합 20자 이내"
        maxLength={20}
        onChange={updateForm}
        errorText="주소가 올바르지 않습니다."
        isValid={isValid.address}
      />
      <ValidInput
        label="설명"
        id="description"
        placeholder="40자 이내"
        maxLength={40}
        onChange={updateForm}
        errorText="설명이 올바르지 않습니다."
        isValid={isValid.description}
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

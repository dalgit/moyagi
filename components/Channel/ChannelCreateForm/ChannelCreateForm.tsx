import { useState, useRef } from 'react'
import { RiImageAddLine } from 'react-icons/ri'
import styled from 'styled-components'
import Button from '@/components/common/Button'
import FImage from '@/components/common/FImage'
import Input from '@/components/common/Input'
import Radio from '@/components/common/Radio/Radio'
import Radios from '@/components/common/Radio/Radios'
import { useCreateChannel } from '@/hooks/mutations/useCreateChannel'
import useForm from '@/hooks/useForm'
import client from '@/utils/axios/axios'

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
  const [previewImg, setPreviewImg] = useState<string>(RiImageAddLine.src)
  const ref = useRef<HTMLInputElement>(null)
  const handleInputChange = () => {
    if (!ref.current?.files) return
    const [file] = ref.current.files

    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      setPreviewImg(reader.result as string)
    }
  }

  const handleImageUpload = async () => {
    if (!ref.current?.files) return
    const [file] = ref.current.files
    const fileName = file.name

    const { signedUrl, imageUrl } = await client
      .post('/awsS3/getSignedUrl', {
        fileName,
      })
      .then((res) => res.data)

    await client.put(signedUrl, file)

    return imageUrl
  }

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
      <ImageSelector>
        {previewImg ? (
          <SelectedImage src={previewImg} alt="preview" />
        ) : (
          <AddIcon size={250} />
        )}
        <label htmlFor="fileInput">파일 선택</label>
        <input
          id="fileInput"
          type="file"
          accept="image/*"
          ref={ref}
          onChange={handleInputChange}
        />
      </ImageSelector>
      <FormWrapper onSubmit={handleCreateChannel}>
        <h2>Create channel</h2>

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
      </FormWrapper>
    </ChannelCreateFormLayout>
  )
}

export default ChannelCreateForm

const SelectedImage = styled(FImage)`
  width: 250px;
  height: 250px;
  border-radius: inherit;
`
const ChannelCreateFormLayout = styled.div`
  display: flex;
`
const FormWrapper = styled.form`
  width: 50%;
  display: flex;
  flex-direction: column;
`

const AddIcon = styled(RiImageAddLine)`
  background-color: white;
`

const ImageSelector = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  gap: 2px;
  border-radius: 12px;

  label {
    text-align: center;
    border-radius: 5px;
    padding: 10px;
    background-color: #7bcfb5;
    color: #fff;
  }
  input {
    display: none;
  }
`

import React, { useState } from 'react'
import { Input, Quill } from 'components/common'
import * as S from './style'

const ChannelNoticeForm = () => {
  const [content, setContent] = useState<string>('')
  const handleSubmit = async () => {
    console.log('z')
  }

  return (
    <S.PostCreateFormLayout>
      <Input placeholder="제목을 입력해주세요" />
      <Quill setContent={setContent} />
      <S.EventButton onClick={handleSubmit}>작성하기</S.EventButton>
    </S.PostCreateFormLayout>
  )
}

export default ChannelNoticeForm

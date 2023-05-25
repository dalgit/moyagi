import ChannelCreateForm from '@/components/Channel/ChannelCreateForm/ChannelCreateForm'
import * as S from './style'

const CreateChannelTemplate = () => {
  return (
    <S.CreateChannelTemplateLayout>
      <h2>Create Channel</h2>
      <ChannelCreateForm />
    </S.CreateChannelTemplateLayout>
  )
}

export default CreateChannelTemplate

import ChannelMemberList from 'features/Channel/ChannelMemberList/ChannelMembersList'
import PostCreateForm from 'features/Post/PostCreateForm/PostCreateForm'
import { ChannelRegistrationList } from 'features/Registration'
import RegistrationForm from 'features/Registration/RegistrationForm/RegistrationForm'
import { UserEditProfile } from 'features/User'

const MODAL_COMPONENTS = {
  channelMemberList: ChannelMemberList,
  RegistrationForm: RegistrationForm,
  UserEditProfile: UserEditProfile,
  PostCreateForm: PostCreateForm,
  ChannelRegistrationList: ChannelRegistrationList,
}

export default MODAL_COMPONENTS

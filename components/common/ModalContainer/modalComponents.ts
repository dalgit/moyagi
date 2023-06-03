import ChannelManageMenus from 'features/Channel/ChannelManageMenus/ChannelManageMenus'
import ChannelMemberList from 'features/Channel/ChannelMemberList/ChannelMembersList'
import PostCreateForm from 'features/Post/PostCreateForm/PostCreateForm'
import { ChannelRegistrationList } from 'features/Registration'
import RegistrationForm from 'features/Registration/RegistrationForm/RegistrationForm'
import { UserEditProfile } from 'features/User'
import AdminChannelUserList from 'features/User/AdminUserList/AdminUserList'

const MODAL_COMPONENTS = {
  channelMemberList: ChannelMemberList,
  RegistrationForm: RegistrationForm,
  UserEditProfile: UserEditProfile,
  PostCreateForm: PostCreateForm,
  ChannelRegistrationList: ChannelRegistrationList,
  ChannelManageMenus: ChannelManageMenus,
  AdminChannelUserList: AdminChannelUserList,
}

export default MODAL_COMPONENTS

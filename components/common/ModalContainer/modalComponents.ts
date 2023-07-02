import { ManagedMembersModal } from 'features/Channel'
import ChannelMemberList from 'features/Channel/ChannelMembersModal/ChannelMembersModal'
import ChannelManageMenus from 'features/Channel/ChannelSideBar/Menus/ChannelManageMenus'
import ChannelUserMenus from 'features/Channel/ChannelSideBar/Menus/ChannelUserMenus'
import PostCreateForm from 'features/Post/PostCreateForm/PostCreateForm'
import { ChannelRegsModal } from 'features/Registration'
import RegistrationForm from 'features/Registration/RegistrationForm/RegistrationForm'
import { UserProfileEditModal } from 'features/User'

const MODAL_COMPONENTS = {
  channelMemberList: ChannelMemberList,
  RegistrationForm: RegistrationForm,
  UserProfileEditModal: UserProfileEditModal,
  PostCreateForm: PostCreateForm,
  ChannelRegsModal: ChannelRegsModal,
  ChannelManageMenus: ChannelManageMenus,
  ChannelUserMenus: ChannelUserMenus,
  ManagedMembersModal: ManagedMembersModal,
}

export default MODAL_COMPONENTS

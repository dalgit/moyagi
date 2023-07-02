import { ManagedMembersModal, ChannelMembersModal } from 'features/Channel'
import ChannelManageMenus from 'features/Channel/ChannelSideBar/Menus/ChannelManageMenus'
import ChannelUserMenus from 'features/Channel/ChannelSideBar/Menus/ChannelUserMenus'
import { PostCreateForm } from 'features/Post'
import { ChannelRegsModal, RegistrationForm } from 'features/Registration'
import { UserProfileEditModal } from 'features/User'

const MODAL_COMPONENTS = {
  ChannelMembersModal: ChannelMembersModal,
  RegistrationForm: RegistrationForm,
  UserProfileEditModal: UserProfileEditModal,
  PostCreateForm: PostCreateForm,
  ChannelRegsModal: ChannelRegsModal,
  ChannelManageMenus: ChannelManageMenus,
  ChannelUserMenus: ChannelUserMenus,
  ManagedMembersModal: ManagedMembersModal,
}

export default MODAL_COMPONENTS

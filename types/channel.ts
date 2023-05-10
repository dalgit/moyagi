import { IUser } from './user'

export interface IChannel {
  _id: string
  name: string
  address: string
  description: string
  isPublic: boolean
  manager: IUser
  members: IUser[]
  imageUrl: string
}

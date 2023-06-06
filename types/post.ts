import { IChannel } from './channel'
import { IUser } from './user'

export interface IPost {
  _id: string
  channel: IChannel
  author: IUser
  content: string
  comments: IComment[]
}

export interface IComment {
  _id: string
  content: string
  author: IUser
}

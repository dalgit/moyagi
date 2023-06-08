import { IChannel } from './channel'
import { IUser } from './user'

export interface IPost {
  _id: string
  channel: IChannel
  author: IUser
  content: string
  comments: IComment[]
  createdAt: Date
}

export interface IComment {
  _id: string
  content: string
  author: IUser
  createdAt: Date
}

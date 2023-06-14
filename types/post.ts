import { IChannel } from './channel'
import { IUser } from './user'

export interface IPost extends postWithId {
  _id: string
  channel: IChannel
  author: IUser
  content: string
  comments: IComment[]
  createdAt: Date
}

interface postWithId {
  postId: IPost['_id']
}

export interface IComment {
  _id: string
  content: string
  author: IUser
  createdAt: Date
}

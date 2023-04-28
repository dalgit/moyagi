import { IChannel } from './channel'
import { IUser } from './user'

export interface IJoinRequest {
  _id: string
  requestor: IUser
  channel: IChannel
  status: string
  time: Date
}

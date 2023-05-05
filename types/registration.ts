import { IChannel } from './channel'
import { IUser } from './user'

export enum EStatus {
  PENDING = 'pending',
  APPROVE = 'approve',
  REJECT = 'reject',
}

export interface IRegistration {
  _id: string
  requester: IUser
  channel: IChannel
  status: EStatus
  time: Date
  message: string
}

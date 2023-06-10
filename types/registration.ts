import { IChannel } from './channel'
import { IUser } from './user'

export enum EStatus {
  PENDING = 'pending',
  APPROVE = 'approved',
  REJECT = 'reject',
}

export interface IRegistration {
  _id: string
  requester: IUser
  channel: IChannel
  status: EStatus
  createdAt: Date
  message: string
}

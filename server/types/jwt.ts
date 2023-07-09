import { ObjectId } from 'mongodb'

export interface JwtUser {
  _id: string | ObjectId
  name: string
  email?: string
  imageUrl?: string
  introduction?: string
  provider: 'local' | 'kakao'
}

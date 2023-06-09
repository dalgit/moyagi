export interface IUser {
  _id: string
  name: string
  email?: string
  password?: string
  imageUrl?: string
  introduction?: string
  provider: 'local' | 'kakao'
}

import { ObjectId } from 'mongodb'

export type TFilter = Record<string, ObjectId | string>

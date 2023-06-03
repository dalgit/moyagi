import { atom } from 'recoil'

export type ToastStatus = 'success' | 'error'

export interface IToast {
  id?: string
  content: string
  type: ToastStatus
}

export const toastState = atom<IToast[]>({
  key: 'toastState',
  default: [],
})

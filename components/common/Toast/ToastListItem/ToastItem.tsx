import { IToast } from 'recoil/toast/toastAtom'
import * as S from './style'

interface ToastItemProps {
  toast: IToast
}

const ToastItem = ({ toast }: ToastItemProps) => {
  const { content, type = 'success' } = toast
  return <S.ToastItemLayout type={type}>{content}</S.ToastItemLayout>
}

export default ToastItem

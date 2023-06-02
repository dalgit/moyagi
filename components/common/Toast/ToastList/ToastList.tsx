import { useRecoilValue } from 'recoil'
import { toastState } from 'recoil/toast/toastAtom'
import * as S from './style'
import ToastItem from '../ToastListItem/ToastItem'

const Toast = () => {
  const toasts = useRecoilValue(toastState)

  if (!toasts.length) null

  return (
    <S.ToastLayout>
      {toasts.map((toast) => (
        <ToastItem key={toast.id} toast={toast} />
      ))}
    </S.ToastLayout>
  )
}

export default Toast

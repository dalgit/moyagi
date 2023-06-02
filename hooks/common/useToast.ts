import { useRecoilState } from 'recoil'
import { IToast, toastState } from 'recoil/toast/toastAtom'
import getUniqueId from 'utils/getUniqueId'

const MAX_TOASTS = 3

const useToast = () => {
  const [toasts, setToasts] = useRecoilState(toastState)

  const closeToast = (toastId: string) =>
    setToasts((prev) => prev.filter((toast) => toast.id !== toastId))

  const onToast = (toast: IToast) => {
    const newToast = { ...toast, id: getUniqueId() }

    setToasts((prev) => {
      if (prev.length >= MAX_TOASTS) {
        return [...prev.slice(1), newToast]
      }

      return [...prev, newToast]
    })

    setTimeout(() => closeToast(newToast.id), 2000)
  }

  return { toasts, onToast }
}

export default useToast

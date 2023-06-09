import { useCallback } from 'react'
import { useRecoilState } from 'recoil'
import { IToast, toastState } from 'recoil/toast/toastAtom'
import getUniqueId from 'utils/common/getUniqueId'

const MAX_TOASTS = 3

const useToast = () => {
  const [toasts, setToasts] = useRecoilState(toastState)

  const closeToast = useCallback(
    (toastId: string) =>
      setToasts((prev) => prev.filter((toast) => toast.id !== toastId)),
    [setToasts],
  )

  const onToast = useCallback(
    (toast: IToast) => {
      const newToast = { ...toast, id: getUniqueId() }

      setToasts((prev) => {
        if (prev.length >= MAX_TOASTS) {
          return [...prev.slice(1), newToast]
        }

        return [...prev, newToast]
      })

      setTimeout(() => closeToast(newToast.id), 2000)
    },
    [closeToast, setToasts],
  )

  return { toasts, onToast }
}

export default useToast

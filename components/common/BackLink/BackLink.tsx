import { useRouter } from 'next/router'
import { ReactNode } from 'react'
import { PREV_PATH } from 'constants/paths'

interface BackButtonProps {
  children: ReactNode
}

const BackLink = ({ children }: BackButtonProps) => {
  const router = useRouter()

  const handleButtonClick = () => {
    const prevPath = sessionStorage.getItem(PREV_PATH)

    if (prevPath) {
      router.back()
    } else {
      router.push('/')
    }
  }

  return <div onClick={handleButtonClick}>{children}</div>
}

export default BackLink

import { useRouter } from 'next/router'
import { ReactNode } from 'react'
import { Button } from '..'

interface BackButtonProps {
  children: ReactNode
}

const BackButton = ({ children }: BackButtonProps) => {
  const router = useRouter()

  const handleButtonClick = () => {
    router.back()
  }

  return (
    <Button variant="secondary" onClick={handleButtonClick}>
      {children}
    </Button>
  )
}

export default BackButton

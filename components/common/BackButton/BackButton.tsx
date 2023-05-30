import { useRouter } from 'next/router'
import { Button } from '..'

const BackButton = ({ children }) => {
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

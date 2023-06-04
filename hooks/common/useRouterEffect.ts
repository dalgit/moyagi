import { useRouter } from 'next/router'
import { useEffect } from 'react'

const useRouterEffect = (handler: () => void) => {
  const { events } = useRouter()

  useEffect(() => {
    const handleEvent = () => {
      handler()
    }

    events.on('routeChangeStart', handleEvent)

    return () => {
      events.off('routeChangeStart', handleEvent)
    }
  }, [events, handler])
}

export default useRouterEffect

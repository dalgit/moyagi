import { useRouter } from 'next/router'
import { useEffect } from 'react'

type HandlerType = (url: string) => void

const useRouterEffect = (handler: HandlerType) => {
  const { events } = useRouter()

  useEffect(() => {
    const handleRouteChangeStart = (url: string) => {
      handler(url)
    }

    events.on('routeChangeStart', handleRouteChangeStart)

    return () => {
      events.off('routeChangeStart', handleRouteChangeStart)
    }
  }, [events, handler])
}

export default useRouterEffect

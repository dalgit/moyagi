import { useRouter } from 'next/router'
import { useState, useEffect, ComponentType } from 'react'
import { useRecoilValue } from 'recoil'
import userAtom from 'recoil/user/userAtom'

interface WithAuthOptions {
  redirectType: 'authenticated' | 'unAuthenticated'
  path: string
}

const withAuth = (Component: ComponentType, options: WithAuthOptions) => {
  const { redirectType, path } = options

  const AuthenticatedComponent = () => {
    const router = useRouter()
    const { _id: hasId } = useRecoilValue(userAtom)
    const [view, setView] = useState(false)

    useEffect(() => {
      const shouldRedirect =
        (hasId && redirectType === 'authenticated') ||
        (!hasId && redirectType === 'unAuthenticated')

      if (shouldRedirect) {
        router.push(path)
      } else {
        setView(true)
      }
    }, [hasId, router])

    return view ? <Component /> : null
  }

  return AuthenticatedComponent
}

export default withAuth

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState, PropsWithChildren } from 'react'
import { useToast } from 'hooks/common'
import { isAxiosError } from 'types/error'

const CustomQueryProvider = ({ children }: PropsWithChildren) => {
  const { onToast } = useToast()

  const handleMutationError = (error: unknown) => {
    if (isAxiosError(error) && error.response?.data.message) {
      onToast({
        content: error.response.data.message,
        type: 'error',
      })
    }
  }

  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            staleTime: 1000 * 30,
          },
          mutations: {
            onError: handleMutationError,
          },
        },
      }),
  )

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}

export default CustomQueryProvider

import { useQueryErrorResetBoundary } from '@tanstack/react-query'
import { ErrorBoundary } from 'react-error-boundary'
import ApiErrorFallback from './ApiErrorFallback'
import type { PropsWithChildren } from 'react'

const ApiErrorBoundary = ({ children }: PropsWithChildren) => {
  const { reset } = useQueryErrorResetBoundary()

  return (
    <ErrorBoundary FallbackComponent={ApiErrorFallback} onReset={reset}>
      {children}
    </ErrorBoundary>
  )
}

export default ApiErrorBoundary

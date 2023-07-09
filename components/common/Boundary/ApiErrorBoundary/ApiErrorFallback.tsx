import Button from 'components/common/Button/Button'
import NotificationBox from 'components/common/NotificationBox/NotificationBox'
import { CustomAxiosError } from 'types/error'
import { errorConfig } from './config'
import type { FallbackProps } from 'react-error-boundary'

interface ApiFallbackProps extends FallbackProps {
  error: CustomAxiosError
}

const ApiErrorFallback = ({ error, resetErrorBoundary }: ApiFallbackProps) => {
  const status = error.response?.status
  const config = errorConfig[status as number] ?? errorConfig.default

  return (
    <NotificationBox {...config}>
      {config?.retry && (
        <Button onClick={resetErrorBoundary}>다시 시도하기</Button>
      )}
    </NotificationBox>
  )
}

export default ApiErrorFallback

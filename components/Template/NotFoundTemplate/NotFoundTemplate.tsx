import { useRouter } from 'next/router'
import { BackLink, Button, NotificationBox } from 'components/common'
import * as S from './style'

interface NotFoundTemplateProps {
  description?: string
}

const NotFoundTemplate = ({ description }: NotFoundTemplateProps) => {
  const router = useRouter()

  const EventButtons = (
    <S.Wrapper>
      <BackLink>
        <Button variant="secondary">이전</Button>
      </BackLink>
      <Button onClick={() => router.push('/')}>메인</Button>
    </S.Wrapper>
  )

  return (
    <S.NotFoundPageLayout>
      <NotificationBox
        title="페이지를 찾을 수 없습니다"
        description={description}
        type="sorry"
      >
        {EventButtons}
      </NotificationBox>
    </S.NotFoundPageLayout>
  )
}

export default NotFoundTemplate

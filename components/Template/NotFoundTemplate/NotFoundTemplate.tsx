import Link from 'next/link'
import { Button, BackButton, NotificationBox } from 'components/common'
import * as S from './style'

interface NotFoundTemplateProps {
  description?: string
}

const NotFoundTemplate = ({ description }: NotFoundTemplateProps) => {
  const EventButtons = (
    <S.Wrapper>
      <BackButton>이전</BackButton>
      <Link href="/">
        <Button>메인</Button>
      </Link>
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

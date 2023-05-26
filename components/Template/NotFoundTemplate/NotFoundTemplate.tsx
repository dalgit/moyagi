import Link from 'next/link'
import { Button } from 'components/common'
import * as S from './style'

const NotFoundTemplate = () => {
  return (
    <S.NotFoundPageLayout>
      <h1>페이지를 찾을 수 없습니다!</h1>
      <Link href="/">
        <Button>메인으로 가기</Button>
      </Link>
    </S.NotFoundPageLayout>
  )
}

export default NotFoundTemplate

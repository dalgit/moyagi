import Link from 'next/link'
import styled from 'styled-components'
import Button from '@/components/common/Ui/Button'

const notFoundPage = () => {
  return (
    <NotFoundPageLayout>
      <h1>페이지를 찾을 수 없습니다!</h1>

      <Link href="/">
        <Button>메인으로 가기</Button>
      </Link>
    </NotFoundPageLayout>
  )
}

export default notFoundPage

const NotFoundPageLayout = styled.div`
  border: 1px solid red;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

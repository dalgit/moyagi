import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import { logo } from 'constants/icon'
import * as S from './style'

const UserNavigation = dynamic(
  () => import('features/User').then((module) => module.UserNavigation),
  { ssr: false },
)

const MainHeader = () => {
  return (
    <S.HeaderLayout>
      <Link href="/">
        <Image src={logo} alt="logo" width={120} height={30} />
      </Link>
      <UserNavigation />
    </S.HeaderLayout>
  )
}

export default MainHeader

import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import { logo } from 'constants/icon'
import * as S from './style'

const UserNav = dynamic(
  () => import('features/User').then((module) => module.UserNav),
  { ssr: false },
)

const Header = () => {
  return (
    <S.HeaderLayout>
      <Link href="/">
        <Image src={logo} alt="logo" width={120} height={30} />
      </Link>
      <UserNav />
    </S.HeaderLayout>
  )
}

export default Header

import Image from 'next/image'
import Link from 'next/link'
import { KAKAO_LOGO } from 'constants/icon'

const KakaoLoginButton = () => {
  return (
    <Link
      href={`https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_REST_API}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI}&response_type=code`}
    >
      <Image src={KAKAO_LOGO} alt="kakao_logo" width={40} height={40} />
    </Link>
  )
}

export default KakaoLoginButton

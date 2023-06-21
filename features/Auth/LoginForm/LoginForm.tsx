import Link from 'next/link'
import { Input, Button, ErrorText } from 'components/common'
import { useAuthenticateUser } from 'hooks/auth'
import { useForm, useBlur } from 'hooks/common'
import authValidations from 'utils/validations/auth'
import * as S from './style'

const initialForm = {
  email: '',
  password: '',
}

const validationFunctions = {
  email: authValidations.email,
  password: authValidations.password,
}

const LoginForm = () => {
  const { form, updateForm, isValid, isAllValid } = useForm(
    initialForm,
    validationFunctions,
  )

  const { isBlurred, handleBlur } = useBlur()
  const { mutate: authenticateMutate } = useAuthenticateUser()

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!isAllValid) return

    authenticateMutate({ ...form })
  }

  return (
    <S.FormLayout onSubmit={handleLogin}>
      <S.Title>LOGIN</S.Title>
      <div>
        <Input
          required
          label="email"
          type="email"
          name="email"
          onChange={updateForm}
          onBlur={handleBlur}
        />
        <ErrorText
          start={isBlurred.email}
          error={!isValid.email}
          text="이메일이 올바르지 않습니다."
        />
      </div>
      <div>
        <Input
          required
          label="password"
          type="password"
          name="password"
          onChange={updateForm}
          onBlur={handleBlur}
        />
        <ErrorText
          start={isBlurred.password}
          error={!isValid.password}
          text=" 비밀번호가 올바르지 않습니다."
        />
      </div>
      <Button type="submit">로그인</Button>
      <Link href="/signup">계정이 없으신가요? 회원가입</Link>
      <Link href="/">
        <S.StyledSpan>체험하기</S.StyledSpan>
      </Link>
    </S.FormLayout>
  )
}

export default LoginForm

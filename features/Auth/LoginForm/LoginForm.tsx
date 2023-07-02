import Link from 'next/link'
import { Button, ValidInput } from 'components/common'
import { useAuthenticateUser } from 'hooks/auth'
import { useForm } from 'hooks/common'
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
  const { form, updateForm, isValid, handleSubmit } = useForm(
    initialForm,
    validationFunctions,
  )

  const { mutate: authenticateMutate } = useAuthenticateUser()

  return (
    <S.FormLayout
      onSubmit={(e) => {
        e.preventDefault()
        handleSubmit(() => authenticateMutate({ ...form }))
      }}
    >
      <S.Title>LOGIN</S.Title>
      <ValidInput
        type="email"
        name="email"
        label="email"
        onChange={updateForm}
        isValid={isValid.email}
        errorText="이메일이 올바르지 않습니다."
      />
      <ValidInput
        type="password"
        name="password"
        label="password"
        onChange={updateForm}
        isValid={isValid.password}
        errorText="비밀번호가 올바르지 않습니다."
      />
      <Button type="submit">로그인</Button>
      <Link href="/signup">계정이 없으신가요? 회원가입</Link>
      <Link href="/">
        <S.StyledSpan>체험하기</S.StyledSpan>
      </Link>
    </S.FormLayout>
  )
}

export default LoginForm

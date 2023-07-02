import Link from 'next/link'
import { Button, ValidInput } from 'components/common'
import { useRegisterUser } from 'hooks/auth'
import { useForm } from 'hooks/common'
import { Dependencies } from 'hooks/common/useForm'
import authValidations from 'utils/validations/auth'
import * as S from '../LoginForm/style'

const initialForm = {
  name: '',
  email: '',
  password: '',
  passwordConfirm: '',
}

const dependencies: Dependencies<typeof initialForm> = {
  password: ['passwordConfirm'],
}

const SignUpForm = () => {
  const { form, updateForm, isValid, handleSubmit } = useForm(
    initialForm,
    authValidations,
    dependencies,
  )

  const { mutate: registerUserMutate } = useRegisterUser()

  return (
    <S.FormLayout
      onSubmit={(e) => {
        e.preventDefault()
        handleSubmit(() => registerUserMutate({ ...form }))
      }}
    >
      <S.Title>Sign Up</S.Title>
      <ValidInput
        type="text"
        name="name"
        label="name"
        onChange={updateForm}
        isValid={isValid.name}
        errorText="이름이 올바르지 않습니다."
      />
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
      <ValidInput
        type="password"
        name="passwordConfirm"
        label="password confirm"
        onChange={updateForm}
        isValid={isValid.passwordConfirm}
        errorText="비밀번호가 일치하지 않습니다."
      />
      <Button type="submit">회원가입</Button>
      <Link href="/login">계정이 이미 있으신가요? 로그인</Link>
    </S.FormLayout>
  )
}

export default SignUpForm

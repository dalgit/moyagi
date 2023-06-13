import Link from 'next/link'
import { Button, Input, ErrorText } from 'components/common'
import { useRegisterUser } from 'hooks/auth'
import { useForm, useBlur } from 'hooks/common'
import authValidations from 'utils/validations/auth'
import * as S from '../LoginForm/style'

const initialForm = {
  name: '',
  email: '',
  password: '',
  passwordConfirm: '',
  asfd: '',
}

const validationFunctions = { ...authValidations }

const SignUpForm = () => {
  const { form, updateForm, isValid, isAllValid } = useForm(
    initialForm,
    validationFunctions,
  )

  const { isBlurred, handleBlur } = useBlur()
  const { mutate: registerUserMutate } = useRegisterUser()

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!isAllValid()) return

    registerUserMutate({ ...form })
  }

  return (
    <S.FormLayout onSubmit={handleSignUp}>
      <S.Title>Sign Up</S.Title>

      <div>
        <Input
          required
          type="text"
          name="name"
          label="name"
          onChange={updateForm}
          onBlur={handleBlur}
        />
        <ErrorText
          start={isBlurred.name}
          error={!isValid.name}
          text="이름이 올바르지 않습니다."
        />
      </div>
      <div>
        <Input
          required
          type="email"
          name="email"
          label="email"
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
          type="password"
          name="password"
          label="Password"
          onChange={updateForm}
          onBlur={handleBlur}
        />
        <ErrorText
          start={isBlurred.password}
          error={!isValid.password}
          text=" 비밀번호가 올바르지 않습니다."
        />
      </div>
      <div>
        <Input
          required
          type="password"
          name="passwordConfirm"
          label="password confirm"
          onChange={updateForm}
          onBlur={handleBlur}
        />
        <ErrorText
          start={isBlurred.passwordConfirm}
          error={!isValid.passwordConfirm}
          text=" 비밀번호가 일치하지 않습니다."
        />
      </div>
      <Button type="submit">회원가입</Button>
      <Link href="/login">계정이 이미 있으신가요? 로그인</Link>
    </S.FormLayout>
  )
}

export default SignUpForm

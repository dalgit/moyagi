import Link from 'next/link'
import { Button, Input, ErrorText } from 'components/common'
import { useRegisterUser } from 'hooks/auth'
import { useForm, useBlur } from 'hooks/common'
import authValidation from 'utils/common/authValidation'
import * as S from './style'

const initialState = {
  name: '',
  email: '',
  password: '',
  passwordConfirm: '',
}

const SignUpForm = () => {
  const { form, updateForm } = useForm<{ [key: string]: string }>(initialState)
  const { isBlurred, handleBlur } = useBlur()
  const { mutate: registerUserMutate } = useRegisterUser()

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const isValid = [
      authValidation.name(form.name),
      authValidation.email(form.email),
      authValidation.password(form.password),
      authValidation.passwordConfirm(form.password, form.passwordConfirm),
    ].every((condition) => condition)

    if (!isValid) return

    registerUserMutate({
      name: form.name,
      email: form.email,
      password: form.password,
      passwordConfirm: form.passwordConfirm,
    })
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
          error={!authValidation.name(form.name)}
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
          error={!authValidation.email(form.email)}
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
          error={!authValidation.password(form.password)}
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
          error={
            !authValidation.passwordConfirm(form.password, form.passwordConfirm)
          }
          text="비밀번호와 같지 않습니다."
        />
      </div>
      <Button type="submit">회원가입</Button>
      <Link href="/login">계정이 이미 있으신가요? 로그인</Link>
    </S.FormLayout>
  )
}

export default SignUpForm

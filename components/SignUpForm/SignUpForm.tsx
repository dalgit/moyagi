import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { isAxiosError } from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import styled from 'styled-components'
import useForm from '@/hooks/useForm'
import { validateAuth } from '@/utils/authValidation'
import client from '@/utils/axios/axios'

const SignUpForm = () => {
  const [isBlurred, setIsBlurred] = useState<{ [key: string]: boolean }>({})
  const { form, updateForm } = useForm<{ [key: string]: string }>({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
  })

  const router = useRouter()

  const handleSignUp = async (
    e: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault()

    try {
      await client.post('/auth/signup', {
        name: form.name,
        email: form.email,
        password: form.password,
        passwordConfirm: form.passwordConfirm,
      })
      router.push('/login')
    } catch (err) {
      if (isAxiosError(err)) {
        console.log(err.response?.data.message)
      }
    }
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsBlurred({ ...isBlurred, [e.target.name]: true })
  }

  return (
    <SignUpFormLayout onSubmit={handleSignUp}>
      <TitleText>Sign Up</TitleText>

      <TextField
        required
        type="text"
        name="name"
        label="name"
        margin="normal"
        value={form.name}
        onChange={updateForm}
        onBlur={handleBlur}
        error={isBlurred.name ? validateAuth.name(form.name) !== '' : false}
        helperText={isBlurred.name && validateAuth.name(form.name)}
      />

      <TextField
        required
        type="email"
        name="email"
        label="email"
        margin="normal"
        value={form.email}
        onChange={updateForm}
        onBlur={handleBlur}
        error={isBlurred.email ? validateAuth.email(form.email) !== '' : false}
        helperText={isBlurred.email && validateAuth.email(form.email)}
      />

      <TextField
        required
        type="password"
        name="password"
        label="Password"
        margin="normal"
        value={form.password}
        onChange={updateForm}
        onBlur={handleBlur}
        error={
          isBlurred.password
            ? validateAuth.password(form.password) !== ''
            : false
        }
        helperText={isBlurred.password && validateAuth.password(form.password)}
      />

      <TextField
        required
        type="password"
        name="passwordConfirm"
        label="passwordConfirm"
        margin="normal"
        value={form.passwordConfirm}
        onChange={updateForm}
        onBlur={handleBlur}
        error={
          isBlurred.passwordConfirm
            ? validateAuth.passwordConfirm(
                form.password,
                form.passwordConfirm,
              ) !== ''
            : false
        }
        helperText={
          isBlurred.passwordConfirm &&
          validateAuth.passwordConfirm(form.password, form.passwordConfirm)
        }
      />

      <SubmitButton type="submit" variant="contained">
        회원가입
      </SubmitButton>
      <Link href="/login">계정이 이미 있으신가요? 로그인</Link>
    </SignUpFormLayout>
  )
}

export default SignUpForm

const SignUpFormLayout = styled.form`
  width: 450px;
  padding: 80px 20px 0 20px;

  display: flex;
  flex-direction: column;

  a {
    text-align: center;
  }
`

const TitleText = styled.span`
  font-size: 40px;
  text-align: center;
`

const SubmitButton = styled(Button)`
  margin: 30px 0;
`

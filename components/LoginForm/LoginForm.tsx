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

const LoginForm = () => {
  const [isBlurred, setIsBlurred] = useState<{ [key: string]: boolean }>({})
  const { form, updateForm } = useForm<{ [key: string]: string }>({
    email: '',
    password: '',
  })
  const router = useRouter()

  const handleLogin = async (
    e: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault()

    try {
      const res = await client.post('/auth/login', {
        email: form.email,
        password: form.password,
      })
      sessionStorage.setItem('userNameItem', res.data.userName)

      router.push('/')
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
    <LoginFormLayout onSubmit={handleLogin}>
      <TitleText>LOGIN</TitleText>

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

      <SubmitButton type="submit" variant="contained">
        로그인
      </SubmitButton>
      <Link href="/signup">계정이 없으신가요? 회원가입</Link>
    </LoginFormLayout>
  )
}

export default LoginForm

const LoginFormLayout = styled.form`
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

import { isAxiosError } from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import styled from 'styled-components'
import useForm from '@/hooks/useForm'
import client from '@/utils/axios/axios'

const LoginForm = () => {
  const [error, setError] = useState<string>('')
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
        setError(err.response?.data.message)
      }
    }
  }

  return (
    <LoginFormLayout onSubmit={handleLogin}>
      <div>Login</div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={updateForm}
        />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={updateForm}
        />
      </div>

      <div>{error}</div>
      <button type="submit">로그인</button>
      <Link href="/signup">계정이 없으신가요? 회원가입</Link>
    </LoginFormLayout>
  )
}

export default LoginForm

const LoginFormLayout = styled.form`
  width: 450px;
`

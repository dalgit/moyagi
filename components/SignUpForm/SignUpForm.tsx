import { isAxiosError } from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import styled from 'styled-components'
import useForm from '@/hooks/useForm'
import client from '@/utils/axios/axios'

const SignUpForm = () => {
  const [error, setError] = useState<string>('')
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
        setError(err.response?.data.message)
      }
    }
  }

  return (
    <SignUpFormLayout onSubmit={handleSignUp}>
      <div>Sign Up</div>

      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={updateForm}
        />
      </div>

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

      <div>
        <label htmlFor="passwordConfirm">Password Confirm</label>
        <input
          type="password"
          name="passwordConfirm"
          value={form.passwordConfirm}
          onChange={updateForm}
        />
      </div>

      <div>{error}</div>
      <button type="submit">회원가입</button>
      <Link href="/login">계정이 이미 있으신가요? 로그인</Link>
    </SignUpFormLayout>
  )
}

export default SignUpForm

const SignUpFormLayout = styled.form`
  width: 450px;
`

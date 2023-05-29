import { useState } from 'react'

const useForm = <T>(initialValue: T) => {
  const [form, setForm] = useState(initialValue)

  const updateForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  return { form, updateForm }
}

export default useForm

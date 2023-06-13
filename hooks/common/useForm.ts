import { useState } from 'react'

const useForm = <
  T extends Record<string, string>,
  V extends Record<string, (value: string, form?: T) => boolean>,
>(
  initialForm: T,
  validationFunctions: V,
) => {
  const [form, setForm] = useState(initialForm)

  const [isValid, setIsValid] = useState<Record<keyof V, boolean>>(() => {
    const isValidKeys = Object.keys(validationFunctions)

    return isValidKeys.reduce(
      (acc, cur) => ({ ...acc, [cur]: false }),
      {} as Record<keyof V, boolean>,
    )
  })

  const updateForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })

    if (validationFunctions[name]) {
      setIsValid({ ...isValid, [name]: validationFunctions[name](value, form) })
    }
  }

  const isAllValid = () => {
    return Object.values(isValid).every((item) => item)
  }

  return { form, updateForm, isValid, isAllValid }
}

export default useForm

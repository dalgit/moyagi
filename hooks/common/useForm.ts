import { useState, useMemo } from 'react'

type Form<T> = Record<keyof T, string>
type IsValid<T> = Record<keyof T, boolean>
type validationFunctions<T> = Partial<
  Record<keyof T, (value: string, form?: Form<T>) => boolean>
>
type Dependencies<T> = Partial<Record<keyof T, (keyof T)[]>>

const useForm = <T extends Record<string, string>>(
  initialForm: T,
  validationFunctions: validationFunctions<T>,
  dependencies?: Dependencies<T>,
) => {
  const [form, setForm] = useState<Form<T>>(initialForm)

  const [isValid, setIsValid] = useState<IsValid<T>>(() => {
    const isValidKeys = Object.keys(validationFunctions)

    return isValidKeys.reduce(
      (acc, cur) => ({ ...acc, [cur]: false }),
      {} as IsValid<T>,
    )
  })

  const updateForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setForm((prevForm) => {
      const updatedForm: Form<T> = {
        ...prevForm,
        [name]: value,
      }
      updateIsValid(name, value, updatedForm)
      return updatedForm
    })
  }

  const updateIsValid = (
    name: keyof T,
    value: string,
    updatedForm: Form<T>,
  ) => {
    if (validationFunctions[name]) {
      setIsValid((prevIsValid) => {
        const updatedIsValid = {
          ...prevIsValid,
          [name]: validationFunctions[name]?.(value, updatedForm),
        }
        updateDependentValidations(name, updatedForm, updatedIsValid)
        return updatedIsValid
      })
    }
  }

  const updateDependentValidations = (
    name: keyof T,
    updatedForm: Form<T>,
    updatedIsValid: IsValid<T>,
  ) => {
    if (!dependencies || !dependencies[name]) return
    dependencies[name]?.forEach((dependentKey) => {
      updatedIsValid[dependentKey] =
        validationFunctions[dependentKey]?.(
          updatedForm[dependentKey],
          updatedForm,
        ) ?? false
    })
  }

  const isAllValid = useMemo(() => {
    return Object.values(isValid).every((item) => item)
  }, [isValid])

  return { form, updateForm, isValid, isAllValid }
}

export type { Dependencies }
export default useForm

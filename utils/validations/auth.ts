type AuthValidations = {
  name: (name: string) => boolean
  email: (name: string) => boolean
  password: (name: string) => boolean
  passwordConfirm: (value: string, form?: Record<string, string>) => boolean
}

const authValidations: AuthValidations = {
  name: (name) => {
    const nameRegex = /^[가-힣]{2,8}$/

    return nameRegex.test(name)
  },

  email: (email) => {
    const emailRegex =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i

    return emailRegex.test(email)
  },

  password: (password) => {
    return password?.length >= 6
  },

  passwordConfirm: (passwordConfirm, form) => {
    return passwordConfirm === form?.password
  },
}

export default authValidations

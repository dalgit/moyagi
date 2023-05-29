interface AuthValidation {
  [key: string]: (value: string, ...args: string[]) => boolean
}

const authValidation: AuthValidation = {
  name: (name: string) => {
    const nameRegex = /^[가-힣]{2,8}$/

    return nameRegex.test(name)
  },

  email: (email: string) => {
    const emailRegex =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i

    return emailRegex.test(email)
  },

  password: (password: string) => {
    return password?.length >= 6
  },

  passwordConfirm: (password: string, passwordConfirm: string) => {
    return password === passwordConfirm
  },
}

export default authValidation

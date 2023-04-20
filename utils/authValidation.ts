interface AuthValidation {
  [key: string]: (value: string, ...args: string[]) => string
}

export const validateAuth: AuthValidation = {
  name: (name: string) => {
    const nameRegex = /^[가-힣]{2,8}$/

    return nameRegex.test(name) ? '' : '이름이 올바르지 않습니다.'
  },

  email: (email: string) => {
    const emailRegex =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i

    return emailRegex.test(email) ? '' : '이메일이 올바르지 않습니다.'
  },

  password: (password: string) => {
    if (password?.length < 6) {
      return '비밀번호는 6자 이상이어야 합니다.'
    }
    return ''
  },

  passwordConfirm: (password: string, passwordConfirm: string) => {
    if (password !== passwordConfirm) {
      return '비밀번호가 일치하지 않습니다.'
    }
    return ''
  },
}

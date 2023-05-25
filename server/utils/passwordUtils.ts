import bcrypt from 'bcrypt'

const getHashedPassword = async (password: string) => {
  const saltRounds = 10
  const salt = await bcrypt.genSalt(saltRounds)

  return await bcrypt.hash(password, salt)
}

export default getHashedPassword

import bcrypt from 'bcrypt'
import { NextApiResponse } from 'next'
import { CustomNextApiRequest } from 'server/types/api'
import generateJwt from 'server/utils/generateAccessToken '
import setAuthCookies from 'server/utils/setAuthCookies'
import withDB from 'server/utils/withDB'

const loginApi = async (req: CustomNextApiRequest, res: NextApiResponse) => {
  const { email, password } = req.body

  const userInfo = await req.db.collection('users').findOne({ email })

  if (!userInfo) {
    return res.status(400).json({ message: '가입되지 않은 이메일입니다.' })
  }

  const { password: enteredPassword, ...user } = userInfo

  const isPasswordMatched = await bcrypt.compare(password, enteredPassword)

  if (!isPasswordMatched) {
    return res.status(400).json({ message: '비밀번호가 일치하지 않습니다.' })
  }

  const { accessToken, refreshToken } = generateJwt(user)
  setAuthCookies(res, accessToken, refreshToken)

  return res.status(200).json(user)
}

export default withDB(loginApi)

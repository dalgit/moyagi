import bcrypt from 'bcrypt'
import { NextApiRequest, NextApiResponse } from 'next'
import connectToDatabase from 'server/utils/connectToDatabase'
import generateJwt from 'server/utils/generateAccessToken '

const loginApi = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const db = await connectToDatabase()
    const { email, password } = req.body

    const userInfo = await db.collection('users').findOne({ email })

    if (!userInfo) {
      return res.status(400).json({ message: '가입되지 않은 이메일입니다.' })
    }

    const { password: enteredPassword, ...user } = userInfo

    const isPasswordMatched = await bcrypt.compare(password, enteredPassword)

    if (!isPasswordMatched) {
      return res.status(400).json({ message: '비밀번호가 일치하지 않습니다.' })
    }

    const { accessToken, refreshToken } = generateJwt(user)

    res.setHeader('Set-Cookie', [
      `refresh_token=${refreshToken}; Path=/; HttpOnly; Secure; SameSite=None; Max-Age=${
        3600 * 24 * 3
      } `,
      `access_token=${accessToken}; Path=/; HttpOnly; Secure; SameSite=None; Max-Age=${3600}`,
    ])

    return res.status(200).json(user)
  } catch (error) {
    res
      .status(500)
      .json({ message: '서버가 불안정합니다. 잠시후 다시 시도해주세요.' })
  }
}

export default loginApi

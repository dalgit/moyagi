import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from '@/utils/db/db'

const loginApi = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const db = await connectToDatabase()

    const { email, password } = req.body

    const user = await db.collection('users').findOne({ email })

    if (!user) {
      return res.status(404).json({ message: '가입되지 않은 이메일입니다.' })
    }

    const isPasswordMatched = await bcrypt.compare(password, user.password)

    if (!isPasswordMatched) {
      return res.status(401).json({ message: '비밀번호가 일치하지 않습니다.' })
    }

    const payload = {
      user: {
        id: user._id.toHexString(),
      },
    }

    const accessToken = jwt.sign(payload, process.env.SECRET_KEY as string, {
      expiresIn: '30m',
    })

    const refreshToken = jwt.sign(payload, process.env.SECRET_KEY as string, {
      expiresIn: '3d',
    })

    res.setHeader('Set-Cookie', [
      `refresh_token=${refreshToken}; Path=/; HttpOnly; Secure; SameSite=None;`,
      `access_token=${accessToken}; Path=/; HttpOnly; Secure; SameSite=None;`,
    ])

    return res.status(200).json({ message: '로그인이 완료되었습니다.' })
  } catch (error) {
    res
      .status(500)
      .json({ message: '서버가 불안정합니다. 잠시후 다시 시도해주세요.' })
  }
}

export default loginApi

import { NextApiRequest, NextApiResponse } from 'next'
import connectToDatabase from 'server/utils/connectToDatabase'
import getHashedPassword from 'server/utils/passwordUtils'

const createUserApi = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const db = await connectToDatabase()

    const { name, email, password } = req.body

    const existingEmail = await db.collection('users').findOne({ email })

    if (existingEmail) {
      return res.status(409).json({ message: '중복된 이메일입니다.' })
    }

    const hashedPassword = await getHashedPassword(password)

    await db.collection('users').insertOne({
      name,
      email,
      password: hashedPassword,
      provider: 'local',
    })

    res.status(201).json({ message: '가입이 완료되었습니다.' })
  } catch (error) {
    res
      .status(500)
      .json({ message: '서버가 불안정합니다. 잠시후 다시 시도해주세요.' })
  }
}

export default createUserApi

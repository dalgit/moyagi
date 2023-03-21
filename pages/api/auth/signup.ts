import { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from '@/utils/db/db'
import { getHashedPassword } from '@/utils/passwordUtils'
const createUserApi = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const client = await connectToDatabase()
    const db = client.db('moyagi')

    const { name, email, password } = req.body

    const checkExisting = await db.collection('users').findOne({ email })

    if (checkExisting) {
      throw new Error('중복된 이메일입니다.')
    }

    const hashedPassword = await getHashedPassword(password)

    await db.collection('users').insertOne({
      name,
      email,
      password: hashedPassword,
    })

    res.status(201).json({ message: '가입이 완료되었습니다.' })
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message })
    }
  }
}

export default createUserApi

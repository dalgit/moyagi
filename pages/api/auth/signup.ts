import { NextApiResponse } from 'next'
import { CustomNextApiRequest } from 'server/types/api'
import getHashedPassword from 'server/utils/passwordUtils'
import withDB from 'server/utils/withDB'

const createUserApi = async (
  req: CustomNextApiRequest,
  res: NextApiResponse,
) => {
  const { name, email, password } = req.body

  const existingEmail = await req.db.collection('users').findOne({ email })

  if (existingEmail) {
    return res.status(409).json({ message: '중복된 이메일입니다.' })
  }

  await req.db.collection('users').insertOne({
    name,
    email,
    password: await getHashedPassword(password),
    provider: 'local',
  })

  return res.status(201).json({ message: '가입이 완료되었습니다.' })
}

export default withDB(createUserApi)

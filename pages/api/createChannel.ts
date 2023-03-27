import jwt, { JwtPayload } from 'jsonwebtoken'
import { ObjectId } from 'mongodb'
import { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from '@/utils/db/db'

const createChannel = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const db = await connectToDatabase()

    const { name, description, publicStatus } = req.body

    const accessToken = req.cookies.access_token
    const decodedToken = jwt.verify(
      accessToken as string,
      process.env.SECRET_KEY as string,
    ) as JwtPayload

    const manager = new ObjectId(decodedToken.user.id)

    await db.collection('channel').insertOne({
      name,
      description,
      publicStatus,
      manager,
    })

    res.status(200).json({ message: '채널이 개설되었습니다.' })
  } catch (error) {
    console.log(error)
    res
      .status(500)
      .json({ message: '서버가 불안정합니다. 잠시후 다시 시도해주세요.' })
  }
}

export const config = {
  api: {
    bodyParser: true,
  },
}

export default createChannel

import jwt, { JwtPayload } from 'jsonwebtoken'
import { ObjectId } from 'mongodb'
import { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from '@/utils/db/db'

const createPost = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const db = await connectToDatabase()

    const { channelId: channel, content } = req.body
    const accessToken = req.cookies.access_token

    const decodedToken = jwt.verify(
      accessToken as string,
      process.env.SECRET_KEY as string,
    ) as JwtPayload

    const channelId = new ObjectId(channel)
    const userId = new ObjectId(decodedToken.user.id)

    await db.collection('posts').insertOne({
      channel: channelId,
      author: userId,
      content,
    })

    res.status(200).json({ message: '작성이 완료되었습니다.' })
  } catch (error) {
    res
      .status(500)
      .json({ message: '서버가 불안정합니다. 잠시후 다시 시도해주세요.' })
  }
}

export default createPost

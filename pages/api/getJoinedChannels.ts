import jwt, { JwtPayload } from 'jsonwebtoken'
import { ObjectId } from 'mongodb'
import { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from '@/utils/db/db'

const getJoinedChannels = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const accessToken = req.cookies.access_token

    const decodedToken = jwt.verify(
      accessToken as string,
      process.env.SECRET_KEY as string,
    ) as JwtPayload

    const userId = new ObjectId(decodedToken.user.id)
    const db = await connectToDatabase()
    const channelsCollection = db.collection('channels')

    const joinedChannels = await channelsCollection
      .find({
        members: userId,
      })
      .project({
        name: true,
        address: true,
        memberCount: { $size: '$members' },
      })
      .toArray()

    res.status(200).json({ joinedChannels })
  } catch (error) {
    console.log(error)
    res
      .status(500)
      .json({ message: '서버가 불안정합니다. 잠시후 다시 시도해주세요.' })
  }
}

export default getJoinedChannels

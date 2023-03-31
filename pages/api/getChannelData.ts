import jwt, { JwtPayload } from 'jsonwebtoken'
import { ObjectId } from 'mongodb'
import { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from '@/utils/db/db'

const getChannelData = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const db = await connectToDatabase()
    const channelsCollection = db.collection('channels')
    const { channelAddress } = req.query

    const cookiesStr = req.headers.cookie?.split('; ') || []
    const accessToken = cookiesStr
      .find((cookie) => cookie.startsWith('access_token='))
      ?.split('=')[1]

    const decodedToken = jwt.verify(
      accessToken as string,
      process.env.SECRET_KEY as string,
    ) as JwtPayload

    const userId = new ObjectId(decodedToken.user.id)
    const channel = await channelsCollection
      .aggregate([
        {
          $match: {
            address: channelAddress,
          },
        },
        {
          $lookup: {
            from: 'users',
            localField: 'members',
            foreignField: '_id',
            as: 'members',
          },
        },
        {
          $lookup: {
            from: 'users',
            localField: 'manager',
            foreignField: '_id',
            as: 'manager',
          },
        },
        {
          $project: {
            _id: true,
            name: true,
            address: true,
            description: true,
            isPublic: true,
            manager: { _id: true, name: true },
            members: { _id: true, name: true },
          },
        },
      ])
      .next()

    const isMember = channel?.members.some((member) => {
      return member._id.toString() === userId.toString()
    })

    return res.status(200).json({ channel, isMember })
  } catch (error) {
    res
      .status(500)
      .json({ message: '서버가 불안정합니다. 잠시후 다시 시도해주세요.' })
  }
}

export default getChannelData

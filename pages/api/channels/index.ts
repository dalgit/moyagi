import { ObjectId } from 'mongodb'
import { NextApiResponse, NextApiRequest } from 'next'
import { NextApiRequestWithUser } from '@/types/types'
import authMiddleware from '@/utils/authMiddleware'
import { connectToDatabase } from '@/utils/db/db'

const getChannelByAddress = async (
  req: NextApiRequestWithUser,
  res: NextApiResponse,
) => {
  try {
    const db = await connectToDatabase()
    const channelsCollection = db.collection('channels')
    const { channelAddress } = req.query

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
          $unwind: '$manager',
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
    return res.status(200).json({ channel })
  } catch (error) {
    res
      .status(500)
      .json({ message: '서버가 불안정합니다. 잠시후 다시 시도해주세요.' })
  }
}

const getChannelsByKeyword = async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  try {
    const db = await connectToDatabase()
    const channelsCollection = db.collection('channels')
    const { keyword } = req.query

    const channel = await channelsCollection
      .find({ name: { $regex: keyword, $options: 'i' } })
      .toArray()

    return res.status(200).json(channel)
  } catch (error) {
    res
      .status(500)
      .json({ message: '서버가 불안정합니다. 잠시후 다시 시도해주세요.' })
  }
}

const createChannel = async (
  req: NextApiRequestWithUser,
  res: NextApiResponse,
) => {
  try {
    const db = await connectToDatabase()
    const { name, address, description, isPublic } = req.body
    const { user } = req

    const userId = new ObjectId(user?.id)

    await db.collection('channels').insertOne({
      name,
      address,
      description,
      isPublic,
      manager: userId,
      members: [userId],
    })

    res.status(200).json({ message: '채널이 개설되었습니다.' })
  } catch (error) {
    res
      .status(500)
      .json({ message: '서버가 불안정합니다. 잠시후 다시 시도해주세요.' })
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const requestMethod = req.method

  switch (requestMethod) {
    case 'POST':
      await authMiddleware(createChannel)(req, res)
      break

    case 'GET':
      if (req.query.channelAddress) {
        await getChannelByAddress(req, res)
      }

      if (req.query.keyword) {
        await getChannelsByKeyword(req, res)
      }
      break

    default:
      res.status(405).end(`${requestMethod} not allowed`)
      break
  }
}

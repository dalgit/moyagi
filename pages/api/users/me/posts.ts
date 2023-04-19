import { ObjectId } from 'mongodb'
import { NextApiResponse, NextApiRequest } from 'next'
import { NextApiRequestWithUser } from '@/types/types'
import authMiddleware from '@/utils/authMiddleware'
import { connectToDatabase } from '@/utils/db/db'

const getPosts = async (req: NextApiRequestWithUser, res: NextApiResponse) => {
  try {
    const { user } = req
    const userId = new ObjectId(user?.id)

    const db = await connectToDatabase()
    const postsCollection = db.collection('posts')

    const posts = await postsCollection
      .aggregate([
        {
          $match: {
            author: userId,
          },
        },
        {
          $lookup: {
            from: 'channels',
            foreignField: '_id',
            localField: 'channel',
            as: 'channel',
          },
        },
        {
          $unwind: '$channel',
        },
        {
          $project: {
            content: 1,
            channel: {
              name: 1,
              address: 1,
            },
          },
        },
      ])
      .toArray()

    return res.status(200).json(posts)
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
    case 'GET':
      await authMiddleware(getPosts)(req, res)
      break

    default:
      res.status(405).end(`${requestMethod} not allowed`)
      break
  }
}

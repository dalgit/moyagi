import { ObjectId } from 'mongodb'
import { NextApiRequest, NextApiResponse } from 'next'
import { NextApiRequestWithUser } from '@/types/types'
import authMiddleware from '@/utils/authMiddleware'
import { connectToDatabase } from '@/utils/db/db'

interface ExtendedNextApiRequest extends NextApiRequest {
  query: {
    channelId?: string
  }
}

const getChannelPosts = async (
  req: ExtendedNextApiRequest,
  res: NextApiResponse,
) => {
  try {
    const { channelId: cid } = req.query
    const channelId = new ObjectId(cid)
    const db = await connectToDatabase()

    const postsCollection = db.collection('posts')

    const posts = await postsCollection
      .aggregate([
        {
          $match: {
            channel: channelId,
          },
        },
        {
          $lookup: {
            localField: 'author',
            from: 'users',
            foreignField: '_id',
            as: 'author',
            pipeline: [{ $project: { _id: false, password: false } }],
          },
        },
        {
          $unwind: {
            path: '$author',
          },
        },
      ])
      .toArray()

    res.status(200).json(posts)
  } catch (e) {
    res
      .status(500)
      .json({ message: '서버가 불안정합니다. 잠시후 다시 시도해주세요.' })
  }
}

const createPost = async (
  req: NextApiRequestWithUser & ExtendedNextApiRequest,
  res: NextApiResponse,
) => {
  try {
    const db = await connectToDatabase()
    const { channelId: cid } = req.query
    const { content } = req.body
    const { user } = req
    const channelId = new ObjectId(cid)
    const userId = new ObjectId(user?.id)

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

export default async function handler(
  req: ExtendedNextApiRequest,
  res: NextApiResponse,
) {
  const requestMethod = req.method

  switch (requestMethod) {
    case 'GET':
      await getChannelPosts(req, res)
      break

    case 'POST':
      await authMiddleware(createPost)(req, res)
      break

    default:
      res.status(405).end(`${requestMethod} not allowed`)
      break
  }
}

import { ObjectId } from 'mongodb'
import { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from '@/utils/db/db'

interface ExtendedNextApiRequest extends NextApiRequest {
  query: {
    channelId?: string
  }
}

export const getChannelPosts = async (
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
            channelId: channelId,
          },
        },
        {
          $lookup: {
            localField: 'authorId',
            from: 'users',
            foreignField: '_id',
            as: 'author',
          },
        },
        {
          $lookup: {
            from: 'channels',
            foreignField: '_id',
            localField: 'channelId',
            as: 'channel',
          },
        },
        {
          $unwind: '$author',
        },
        {
          $unwind: '$channel',
        },
        {
          $project: {
            author: { _id: true, name: true },
            content: true,
            channel: true,
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

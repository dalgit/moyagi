import { ObjectId } from 'mongodb'
import { NextApiRequest, NextApiResponse } from 'next'
import { postByChannelIdPipeLine } from '../../server/pipeLine/post'
import connectToDatabase from '../utils/connectToDatabase'

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
    const channelId = new ObjectId(req.query.channelId)
    const db = await connectToDatabase()

    const postsCollection = db.collection('posts')

    const posts = await postsCollection
      .aggregate(postByChannelIdPipeLine(channelId))
      .toArray()

    res.status(200).json(posts)
  } catch (e) {
    res
      .status(500)
      .json({ message: '서버가 불안정합니다. 잠시후 다시 시도해주세요.' })
  }
}

export default getChannelPosts

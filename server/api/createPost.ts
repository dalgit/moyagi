import { ObjectId } from 'mongodb'
import { NextApiRequest, NextApiResponse } from 'next'
import { NextApiRequestWithUser } from 'types/types'
import { postByIdPipeLine } from '../../server/pipeLine/post'
import connectToDatabase from '../utils/connectToDatabase'

interface ExtendedNextApiRequest extends NextApiRequest {
  query: {
    channelId?: string
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
    const postsCollection = db.collection('posts')

    const { insertedId } = await postsCollection.insertOne({
      channelId: channelId,
      authorId: userId,
      content,
      createdAt: new Date(),
    })

    const post = await postsCollection
      .aggregate(postByIdPipeLine(insertedId))
      .next()

    res.status(200).json(post)
  } catch (error) {
    res
      .status(500)
      .json({ message: '서버가 불안정합니다. 잠시후 다시 시도해주세요.' })
  }
}

export default createPost

import { ObjectId } from 'mongodb'
import { NextApiResponse } from 'next'
import { CustomNextApiRequest } from 'server/types/api'
import authMiddleware from 'server/utils/authMiddleware'
import withDB from 'server/utils/withDB'
import { postMatchPipeline } from '../../server/pipeLine/post'

const createPost = async (req: CustomNextApiRequest, res: NextApiResponse) => {
  const { channelId: cid } = req.query
  const { content } = req.body
  const { user } = req
  const channelId = new ObjectId(cid as string)
  const userId = new ObjectId(user?._id)
  const postsCollection = req.db.collection('posts')

  const { insertedId } = await postsCollection.insertOne({
    channelId: channelId,
    authorId: userId,
    content,
    createdAt: new Date(),
  })

  const post = await postsCollection
    .aggregate(postMatchPipeline({ _id: insertedId }))
    .next()

  res.status(200).json(post)
}

export default authMiddleware(withDB(createPost))

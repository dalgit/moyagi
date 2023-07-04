import { ObjectId } from 'mongodb'
import { NextApiResponse } from 'next'
import { CustomNextApiRequest } from 'server/types/api'
import withDB from 'server/utils/withDB'
import { postMatchPipeline } from '../../server/pipeLine/post'

const getUserPosts = async (
  req: CustomNextApiRequest,
  res: NextApiResponse,
) => {
  const userId = new ObjectId(req.query.id as string)

  const posts = await req.db
    .collection('posts')
    .aggregate(postMatchPipeline({ authorId: userId }))
    .toArray()

  return res.status(200).json(posts)
}

export default withDB(getUserPosts)

import { ObjectId } from 'mongodb'
import { NextApiResponse } from 'next'
import { commentMatchPipeline } from 'server/pipeLine/comment'
import { CustomNextApiRequest } from 'server/types/api'
import withDB from 'server/utils/withDB'

const getPostComments = async (
  req: CustomNextApiRequest,
  res: NextApiResponse,
) => {
  const postId = new ObjectId(req.query.postId as string)

  const comments = await req.db
    .collection('comments')
    .aggregate(commentMatchPipeline({ postId }))
    .toArray()

  return res.status(200).json(comments)
}

export default withDB(getPostComments)

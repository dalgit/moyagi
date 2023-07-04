import { ObjectId } from 'mongodb'
import { NextApiResponse } from 'next'
import { CustomNextApiRequest } from 'server/types/api'
import withDB from 'server/utils/withDB'

const deletePostComment = async (
  req: CustomNextApiRequest,
  res: NextApiResponse,
) => {
  const commentId = new ObjectId(req.query.commentId as string)

  const deletedPostComment = await req.db
    .collection('comments')
    .findOneAndDelete({
      _id: commentId,
    })

  return res.status(200).json(deletedPostComment)
}

export default withDB(deletePostComment)

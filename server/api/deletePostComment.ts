import { ObjectId } from 'mongodb'
import { NextApiResponse } from 'next'
import { NextApiRequestWithUser } from 'types/types'
import connectToDatabase from '../utils/connectToDatabase'

const deletePostComment = async (
  req: NextApiRequestWithUser,
  res: NextApiResponse,
) => {
  try {
    const commentId = new ObjectId(req.query.commentId as string)

    const db = await connectToDatabase()
    const collection = db.collection('comments')

    const deletedPostComment = await collection.findOneAndDelete({
      _id: commentId,
    })

    return res.status(200).json(deletedPostComment)
  } catch (error) {
    res
      .status(500)
      .json({ message: '서버가 불안정합니다. 잠시후 다시 시도해주세요.' })
  }
}

export default deletePostComment

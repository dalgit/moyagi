import { ObjectId } from 'mongodb'
import { NextApiResponse, NextApiRequest } from 'next'
import { NextApiRequestWithUser } from '@/types/types'
import { connectToDatabase } from '@/utils/db/db'

const updateJoinRequests = async (
  req: NextApiRequestWithUser,
  res: NextApiResponse,
) => {
  try {
    const { channelId: cid, requestId: rid } = req.query
    const channelId = new ObjectId(cid)
    const requestId = new ObjectId(rid)

    const { status } = req.body

    const db = await connectToDatabase()
    const joinRequestCollection = db.collection('joinRequest')

    await joinRequestCollection.findOneAndUpdate(
      {
        _id: requestId,
        channelId,
      },
      { $set: { status } },
    )

    return res.status(200).json({ message: 'ok' })
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
    case 'PATCH':
      await updateJoinRequests(req, res)
      break

    default:
      res.status(405).end(`${requestMethod} not allowed`)
      break
  }
}

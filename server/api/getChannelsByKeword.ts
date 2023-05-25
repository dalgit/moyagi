import { NextApiResponse, NextApiRequest } from 'next'
import connectToDatabase from '../utils/connectToDatabase'

const getChannelsByKeyword = async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  try {
    const { keyword } = req.query

    const db = await connectToDatabase()
    const channelsCollection = db.collection('channels')

    const channel = await channelsCollection
      .find({ name: { $regex: keyword, $options: 'i' } })
      .toArray()

    return res.status(200).json(channel)
  } catch (error) {
    res
      .status(500)
      .json({ message: '서버가 불안정합니다. 잠시후 다시 시도해주세요.' })
  }
}

export default getChannelsByKeyword

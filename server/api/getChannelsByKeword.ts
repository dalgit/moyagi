import { NextApiResponse } from 'next'
import { CustomNextApiRequest } from 'server/types/api'
import withDB from 'server/utils/withDB'

const getChannelsByKeyword = async (
  req: CustomNextApiRequest,
  res: NextApiResponse,
) => {
  const { keyword } = req.query

  if (!keyword) {
    return res.status(400).json({ message: '유효하지 않은 키워드입니다.' })
  }

  try {
    const channel = await req.db
      .collection('channels')
      .find({ name: { $regex: keyword, $options: 'i' } })
      .toArray()

    return res.status(200).json(channel)
  } catch (error) {
    return res.status(400).json({ message: '유효하지 않은 키워드입니다.' })
  }
}

export default withDB(getChannelsByKeyword)

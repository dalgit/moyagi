import { NextApiRequest, NextApiResponse } from 'next'

const logout = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    res.setHeader('set-cookie', [
      'access_token=; path=/; max-age=0',
      'refresh_token=; path=/; max-age=0',
    ])
    return res.status(200).json({ message: 'ok' })
  } catch (error) {
    res
      .status(500)
      .json({ message: '서버가 불안정합니다. 잠시후 다시 시도해주세요.' })
  }
}

export default logout

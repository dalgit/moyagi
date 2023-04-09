import jwt, { JwtPayload } from 'jsonwebtoken'
import { NextApiRequest, NextApiResponse } from 'next'

const refresh = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const refreshToken = req.cookies.refresh_token

    const decodedToken = jwt.verify(
      refreshToken as string,
      process.env.SECRET_KEY as string,
    ) as JwtPayload

    const payload = {
      user: {
        id: decodedToken.user.id,
      },
    }

    const accessToken = jwt.sign(payload, process.env.SECRET_KEY as string, {
      expiresIn: '30m',
    })

    res.setHeader(
      'Set-Cookie',
      `access_token=${accessToken}; Path=/; HttpOnly; Secure; SameSite=None;`,
    )

    res.status(200).json({ message: 'ok' })
  } catch (error) {
    res
      .status(500)
      .json({ message: '서버가 불안정합니다. 잠시후 다시 시도해주세요.' })
  }
}

export default refresh
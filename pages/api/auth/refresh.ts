import { TokenExpiredError } from 'jsonwebtoken'
import { NextApiRequest, NextApiResponse } from 'next'
import generateJwt from 'server/utils/generateAccessToken '
import jwtVerify from 'server/utils/jwtVerify'

const refresh = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const refreshToken = req.cookies.refresh_token as string

    const { user } = jwtVerify(refreshToken)
    const { accessToken } = generateJwt(user)

    res.setHeader(
      'Set-Cookie',
      `access_token=${accessToken}; Path=/; HttpOnly; Secure; SameSite=None; Max-Age=${3600}`,
    )

    return res.status(200).json(user)
  } catch (error) {
    if (error instanceof TokenExpiredError) {
      return res.status(401).json({
        errorType: 'RefreshTokenExpiredError',
        message: 'refresh token이 만료되었습니다.',
      })
    }

    return res
      .status(500)
      .json({ message: '서버가 불안정합니다. 잠시후 다시 시도해주세요.' })
  }
}

export default refresh

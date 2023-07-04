import { TokenExpiredError } from 'jsonwebtoken'
import { NextApiResponse } from 'next'
import { CustomNextApiHandler, CustomNextApiRequest } from 'server/types/api'
import jwtVerify from './jwtVerify'

const authMiddleware =
  (handler: CustomNextApiHandler) =>
  async (req: CustomNextApiRequest, res: NextApiResponse) => {
    const accessToken = req.cookies.access_token as string

    if (!accessToken) {
      return res.status(401).json({
        errorType: 'TokenNotFoundError',
        message: 'access token이 존재하지 않습니다.',
      })
    }

    try {
      const decodedToken = jwtVerify(accessToken)
      req.user = decodedToken.user

      return handler(req, res)
    } catch (error) {
      if (error instanceof TokenExpiredError) {
        return res.status(401).json({
          errorType: 'AccessTokenExpiredError',
          message: 'access toekn이 만료되었습니다.',
        })
      }
      return res
        .status(500)
        .json({ message: '서버가 불안정합니다. 잠시후 다시 시도해주세요.' })
    }
  }

export default authMiddleware

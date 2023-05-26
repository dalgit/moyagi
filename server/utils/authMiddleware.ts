import { JsonWebTokenError, TokenExpiredError } from 'jsonwebtoken'
import { NextApiHandler, NextApiResponse } from 'next'
import { NextApiRequestWithUser } from 'types/types'
import jwtVerify from './jwtVerify'

const authMiddleware =
  (handler: NextApiHandler) =>
  async (req: NextApiRequestWithUser, res: NextApiResponse) => {
    const accessToken = req.cookies.access_token as string
    try {
      const decodedToken = jwtVerify(accessToken)
      req.user = decodedToken.user

      return handler(req, res)
    } catch (error) {
      if (error instanceof TokenExpiredError) {
        return res.status(401).json({ errorType: 'TokenExpiredError' })
      }

      if (error instanceof JsonWebTokenError) {
        return res.status(401).json({ errorType: 'JsonWebTokenError' })
      }

      return res
        .status(500)
        .json({ message: '서버가 불안정합니다. 잠시후 다시 시도해주세요.' })
    }
  }

export default authMiddleware

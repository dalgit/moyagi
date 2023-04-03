import jwt, {
  JwtPayload,
  JsonWebTokenError,
  TokenExpiredError,
} from 'jsonwebtoken'
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'

const authMiddleware =
  (handler: NextApiHandler) =>
  async (req: NextApiRequest, res: NextApiResponse) => {
    const accessToken = req.cookies.access_token

    try {
      const decodedToken = jwt.verify(
        accessToken as string,
        process.env.SECRET_KEY as string,
      ) as JwtPayload

      req.body.user = decodedToken.user

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

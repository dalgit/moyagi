import jwt, { JwtPayload } from 'jsonwebtoken'

const jwtVerify = (token: string) => {
  return jwt.verify(token, process.env.SECRET_KEY as string) as JwtPayload
}

export default jwtVerify

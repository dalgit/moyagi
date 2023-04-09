import jwt, { JwtPayload } from 'jsonwebtoken'

export const jwtVerify = (token: string) => {
  const decodedToken = jwt.verify(
    token,
    process.env.SECRET_KEY as string,
  ) as JwtPayload

  return decodedToken
}

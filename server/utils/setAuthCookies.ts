import { NextApiResponse } from 'next'

const DEFAULT_EXPIRATION_TIME = 3600 * 24 * 30

const createCookie = (
  name: string,
  value: string,
  maxAge: number = DEFAULT_EXPIRATION_TIME,
) =>
  `${name}=${value}; Path=/; HttpOnly; Secure; SameSite=None; Max-Age=${maxAge}`

const setAuthCookies = (
  res: NextApiResponse,
  accessToken: string,
  refreshToken?: string,
) => {
  const accessCookie = createCookie('access_token', accessToken)

  const refreshCookie = refreshToken
    ? createCookie('refresh_token', refreshToken)
    : ''

  res.setHeader('Set-Cookie', [accessCookie, refreshCookie])
}

export default setAuthCookies

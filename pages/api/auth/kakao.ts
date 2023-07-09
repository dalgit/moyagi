import axios from 'axios'
import { Db } from 'mongodb'
import { NextApiResponse } from 'next'
import { CustomNextApiRequest } from 'server/types/api'
import generateJwt from 'server/utils/generateAccessToken '
import setAuthCookies from 'server/utils/setAuthCookies'
import withDB from 'server/utils/withDB'

interface KakaoToken {
  access_token: string
  token_type: string
  refresh_token: string
  expires_in: number
  scope: string
  refresh_token_expires_in: string
}

interface KakaoUser {
  id: number
  properties: {
    nickname?: string
    profile_image?: string
  }
}

const getTokenFromKakao = async (code: string): Promise<KakaoToken> =>
  await axios
    .post(
      `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${process.env.NEXT_PUBLIC_KAKAO_REST_API}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI}&code=${code}`,
      {
        headers: { 'Content-Type': 'application/json' },
      },
    )
    .then((res) => res.data)

const getUserFromKakao = async (access_token: string): Promise<KakaoUser> =>
  await axios
    .get('https://kapi.kakao.com/v2/user/me', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${access_token}`,
      },
    })
    .then((res) => res.data)

const getUserFromDB = async (db: Db, kakaoId: number) => {
  return await db.collection('users').findOne({ oauthId: kakaoId })
}

const createUserToDB = async (db: Db, { id, properties }: KakaoUser) => {
  const newUser = {
    oauthId: id,
    name: properties?.nickname || `user${id}`,
    imageUrl: properties?.profile_image,
    provider: 'kakao',
  }

  const result = await db.collection('users').insertOne(newUser)

  return { _id: result.insertedId, ...newUser }
}

const kakaoApi = async (req: CustomNextApiRequest, res: NextApiResponse) => {
  const { code } = req.body

  const token = await getTokenFromKakao(code)

  const kakaoUser = await getUserFromKakao(token.access_token)

  let user = await getUserFromDB(req.db, kakaoUser.id)

  if (!user) {
    user = await createUserToDB(req.db, kakaoUser)
  }

  const { accessToken, refreshToken } = generateJwt(user)
  setAuthCookies(res, accessToken, refreshToken)

  return res.status(200).json(user)
}

export default withDB(kakaoApi)

import jwt from 'jsonwebtoken'

const generateJwt = (user: any) => {
  const userId =
    typeof user._id === 'string' ? user._id : user._id.toHexString()

  const payload = {
    user: {
      ...user,
      _id: userId,
    },
  }

  const accessToken = jwt.sign(payload, process.env.SECRET_KEY as string, {
    expiresIn: '30m',
  })

  const refreshToken = jwt.sign(payload, process.env.SECRET_KEY as string, {
    expiresIn: '3d',
  })

  return { accessToken, refreshToken }
}

export default generateJwt

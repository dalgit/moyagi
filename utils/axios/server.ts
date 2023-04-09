import axios, {
  AxiosError,
  AxiosRequestConfig,
  AxiosRequestHeaders,
  AxiosResponse,
} from 'axios'
import { GetServerSidePropsContext } from 'next/types'

interface AdaptAxiosRequestConfig extends AxiosRequestConfig {
  headers: AxiosRequestHeaders
}

interface ErrorResponse {
  data: {
    errorType?: string
  }
}

const createServerInstance = (context: GetServerSidePropsContext) => {
  const {
    req: { headers },
    res: { setHeader },
  } = context

  const cookie = headers?.cookie

  const baseURL = process.env.NEXT_PUBLIC_BASE_URL as string

  const server = axios.create({
    baseURL,
    withCredentials: true,
  })

  server.defaults.headers.cookie = cookie || ''

  server.interceptors.request.use(
    (config: AdaptAxiosRequestConfig) => {
      return config
    },

    (error) => Promise.reject(error),
  )

  server.interceptors.response.use(
    async (res: AxiosResponse) => {
      return res
    },

    async (error: AxiosError<ErrorResponse>) => {
      if (
        error.response?.status === 401 &&
        'errorType' in error.response.data
      ) {
        const originalRequest = error.config as AxiosRequestConfig

        if (error.response.data.errorType === 'TokenExpiredError') {
          await server
            .post('http://localhost:3000/api/auth/refresh')
            .then((res) => {
              const access_token = res.headers['set-cookie']?.[0] || ''
              setHeader('set-cookie', access_token)

              return axios(originalRequest)
            })
        }
      }

      return Promise.reject(error)
    },
  )

  return server
}
export default createServerInstance

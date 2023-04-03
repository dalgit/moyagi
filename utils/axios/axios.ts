import axios, {
  AxiosError,
  AxiosRequestConfig,
  AxiosRequestHeaders,
  AxiosResponse,
} from 'axios'

interface AdaptAxiosRequestConfig extends AxiosRequestConfig {
  headers: AxiosRequestHeaders
}

interface ErrorResponse {
  data: {
    errorType?: string
  }
}

const baseURL = process.env.NEXT_PUBLIC_BASE_URL as string

const client = axios.create({
  baseURL,
  withCredentials: true,
})

client.interceptors.request.use(
  (config: AdaptAxiosRequestConfig) => {
    return config
  },
  (error) => Promise.reject(error),
)

client.interceptors.response.use(
  async (res: AxiosResponse) => {
    return res
  },
  async (error: AxiosError<ErrorResponse>) => {
    if (error.response?.status === 401 && 'errorType' in error.response.data) {
      const originalRequest = error.config as AxiosRequestConfig

      if (error.response.data.errorType === 'JsonWebTokenError') {
        return (window.location.href = '/login')
      }

      if (error.response.data.errorType === 'TokenExpiredError') {
        try {
          await axios.post('http://localhost:3000/api/auth/refresh')
          return axios(originalRequest)
        } catch (e) {
          return (window.location.href = '/login')
        }
      }
    }

    return Promise.reject(error)
  },
)

export default client

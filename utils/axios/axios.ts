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
      if (error.response.data.errorType === 'TokenExpiredError') {
        const originalRequest = error.config as AxiosRequestConfig
        try {
          await axios.post('http://localhost:3000/api/auth/refresh')
          return axios(originalRequest)
        } catch (e) {
          if (error.response.data.errorType === 'TokenExpiredError') {
            window.location.href = '/login'
            alert('다시 로그인을 해주세요.')
          }
        }
      }
    }

    return Promise.reject(error)
  },
)

export default client

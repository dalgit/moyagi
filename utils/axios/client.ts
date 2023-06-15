import axios from 'axios'

const baseURL = process.env.NEXT_PUBLIC_BASE_URL as string

const client = axios.create({
  baseURL,
  withCredentials: true,
})

export default client

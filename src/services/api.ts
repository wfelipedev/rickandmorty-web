import axios, { AxiosDefaults, AxiosInstance, HeadersDefaults } from 'axios'

const accessToken = localStorage.getItem('@suflex:accessToken')
interface HeadersProps extends HeadersDefaults {
  Authorization?: string
}
interface DefaultsProps extends AxiosDefaults {
  headers: HeadersProps
}
interface AxiosProps extends AxiosInstance {
  defaults: DefaultsProps
}

export const api: AxiosProps = axios.create({
  baseURL: 'http://localhost:3333/api/v1',
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
})

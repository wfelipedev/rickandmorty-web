import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { ICredentials, IUser } from '../interfaces'
import { api } from '../services/api'

export const AuthContext = createContext({} as AuthContextData)

interface AuthContextData {
  isAuthenticated: boolean
  user: IUser
  signIn: (credentials: ICredentials) => Promise<void>
  signOut: () => void
  setUser: React.Dispatch<React.SetStateAction<IUser>>
}

interface AuthProviderProps {
  children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<IUser>(
    JSON.parse(localStorage.getItem('@suflex:user') || '{}')
  )
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    !!JSON.parse(localStorage.getItem('@suflex:authenticated') || 'false')
  )

  const error = (msg: string) => {
    toast.error(msg)
  }

  useEffect(() => {
    const storagedIsAuthenticated = localStorage.getItem(
      '@suflex:authenticated'
    )
    const storagedUser = localStorage.getItem('@suflex:user')
    const storagedToken = localStorage.getItem('@suflex:accessToken')

    if (storagedToken && storagedIsAuthenticated && storagedUser) {
    }
  }, [])

  async function signIn({ name, password }: ICredentials) {
    try {
      const response = await api.post('/auth/signin', { name, password })

      const { accessToken, user: userData } = response.data

      setIsAuthenticated(true)
      setUser(userData)

      api.defaults.headers.Authorization = `Bearer ${accessToken}`

      localStorage.setItem('@suflex:authenticated', JSON.stringify(true))
      localStorage.setItem('@suflex:user', JSON.stringify(userData))
      localStorage.setItem('@suflex:accessToken', accessToken)

      window.location.href = '/'
    } catch (err) {
      error('E-mail ou Senha incorretos!')
    }
  }

  async function signOut() {
    localStorage.clear()
    setIsAuthenticated(false)
    window.location.href = '/'
  }

  return (
    <>
      <Toaster />
      <AuthContext.Provider
        value={{ isAuthenticated, signIn, signOut, user, setUser }}
      >
        {children}
      </AuthContext.Provider>
    </>
  )
}

export function useAuth(): AuthContextData {
  return useContext(AuthContext)
}

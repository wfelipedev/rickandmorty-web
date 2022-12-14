import { useLayoutEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import SignInComponent from '../../../components/SignIn'
import { useAuth } from '../../../context/useAuth'

const SignIn = () => {
  const { isAuthenticated } = useAuth()
  const navigate = useNavigate()

  useLayoutEffect(() => {
    if (isAuthenticated) {
      navigate('/')
    }
  }, [isAuthenticated, navigate])

  return <SignInComponent />
}

export default SignIn

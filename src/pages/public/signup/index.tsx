import { useLayoutEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import SignUpComponent from '../../../components/SignUp'
import { useAuth } from '../../../context/useAuth'

const Signup = () => {
  const { isAuthenticated } = useAuth()
  const navigate = useNavigate()

  useLayoutEffect(() => {
    if (isAuthenticated) {
      navigate('/')
    }
  }, [isAuthenticated, navigate])

  return <SignUpComponent />
}

export default Signup

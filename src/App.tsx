import './App.css'
import { AuthProvider } from './context/useAuth'
import AppRoutes from './routes'
import 'antd/dist/antd.css'

function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  )
}

export default App

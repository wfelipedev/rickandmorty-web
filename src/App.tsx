import './App.css'
import { AuthProvider } from './context/useAuth'
import AppRoutes from './routes'
import 'antd/dist/antd.css'
import { client } from './services/client-graphql'
import { gql } from '@apollo/client'

function App() {
  client.query({
    query: gql`
      query {
        getFavorites {
          id
          char_id
          name
          status
          species
          type
          gender
          image
          url
          created
          created_at
          origin {
            name
            url
          }
          location {
            name
            url
          }
        }
      }
    `,
  })

  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  )
}

export default App

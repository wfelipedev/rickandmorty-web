import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

const httpLink = new HttpLink({
  uri: 'http://localhost:3333/graphql',
})

const authLink = setContext((_, { headers }) => {
  const storagedToken = localStorage.getItem('@suflex:accessToken')

  return {
    headers: {
      ...headers,
      Authorization: `Bearer ${storagedToken}`,
    },
  }
})

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})

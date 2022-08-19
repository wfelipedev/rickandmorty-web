import { gql } from '@apollo/client'

export const GET_FAVORITES = gql`
  query GetFavorites {
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
`

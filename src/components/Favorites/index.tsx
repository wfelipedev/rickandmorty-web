import { useEffect, useState } from 'react'
import { ICharacter } from '../../interfaces/character'
import { DefaultLayout } from '../../layouts/Default'
import { useQuery, gql } from '@apollo/client'
import * as Styled from './styled'
import { useMedia } from '../../utils/media'
import CharacterTile from './Character'

const GET_FAVORITES = gql`
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

export const FavoritesComponent = () => {
  const { loading, error, data } = useQuery(GET_FAVORITES)
  const tablet1439 = useMedia('(max-width: 1439px)')
  const tablet1200 = useMedia('(max-width: 1200px)')

  const [characters, setCharacters] = useState<ICharacter[]>([])

  useEffect(() => {
    setCharacters(data.getFavorites)
  }, [data.getFavorites])

  if (loading) return <div>Carregando...</div>
  if (error) return <div>{error.message}</div>

  return (
    <DefaultLayout>
      <Styled.Characters>
        <Styled.CharacterSection>
          {characters && (
            <Styled.CharacterGrid
              tablet1439={tablet1439}
              tablet1200={tablet1200}
            >
              {characters.map(item => (
                <CharacterTile key={item.char_id} character={item} />
              ))}
            </Styled.CharacterGrid>
          )}
        </Styled.CharacterSection>
      </Styled.Characters>
    </DefaultLayout>
  )
}

export default FavoritesComponent

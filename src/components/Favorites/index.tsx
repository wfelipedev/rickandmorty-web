import { useEffect, useState } from 'react'
import { ICharacter } from '../../interfaces'
import { DefaultLayout } from '../../layouts/Default'
import { useQuery } from '@apollo/client'
import * as Styled from './styled'
import { useMedia } from '../../utils/media'
import CharacterTile from './Character'
import { GET_FAVORITES } from '../../graphql/favorite'

export const FavoritesComponent = () => {
  const { data } = useQuery(GET_FAVORITES)
  const tablet1439 = useMedia('(max-width: 1439px)')
  const tablet1200 = useMedia('(max-width: 1200px)')

  const [characters, setCharacters] = useState<ICharacter[]>([])

  useEffect(() => {
    setCharacters(data.getFavorites)
  }, [data.getFavorites])

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

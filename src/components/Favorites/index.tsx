import { useEffect, useState } from 'react'
import { ICharacter } from '../../interfaces'
import { DefaultLayout } from '../../layouts/Default'
import { useQuery } from '@apollo/client'
import { useMedia } from '../../utils/media'
import CharracterCard from './Character'
import { GET_FAVORITES } from '../../graphql/favorite'
import rick from '../../assets/rick.png'
import * as Styled from './styles'

export const FavoritesComponent = () => {
  const { data } = useQuery(GET_FAVORITES)
  const tablet1439 = useMedia('(max-width: 1439px)')
  const tablet1200 = useMedia('(max-width: 1200px)')
  const tablet768 = useMedia('(max-width: 768px)')

  const [characters, setCharacters] = useState<ICharacter[]>([])

  useEffect(() => {
    setCharacters(data.getFavorites)
  }, [data.getFavorites])

  return (
    <DefaultLayout>
      <Styled.Characters>
        <Styled.CharacterSection>
          {characters && characters.length > 0 ? (
            <Styled.CharacterGrid
              tablet1439={tablet1439}
              tablet1200={tablet1200}
              tablet768={tablet768}
            >
              {characters.map(item => (
                <CharracterCard key={item.char_id} character={item} />
              ))}
            </Styled.CharacterGrid>
          ) : (
            <Styled.Empty>
              <img src={rick} />
              <h2>Parece que você ainda não tem nenhum personagem favorito!</h2>
              <a href="/">Voltar para Página Inicial</a>
            </Styled.Empty>
          )}
        </Styled.CharacterSection>
      </Styled.Characters>
    </DefaultLayout>
  )
}

export default FavoritesComponent

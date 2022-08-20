import { Button, Select } from 'antd'
import { useEffect, useState } from 'react'
import { ICharacter } from '../../interfaces/character'
import { DefaultLayout } from '../../layouts/Default'
import { useMedia } from '../../utils/media'
import CharacterTile from './Character'
import * as Styled from './styles'

const { Option } = Select

const species = [
  { type: '', label: 'Todos' },
  { type: 'Alien', label: 'Alien' },
  { type: 'Human', label: 'Humano' },
]

const CharactersComponent = () => {
  const tablet1439 = useMedia('(max-width: 1439px)')
  const tablet1200 = useMedia('(max-width: 1200px)')

  const [currentPage, setCurrentPage] = useState<number>(1)
  const [characters, setCharacters] = useState<ICharacter[]>([])
  const [characterName, setCharacterName] = useState<string>('')
  const [characterSpecies, setCharacterSpecies] = useState<string>('')
  const [backButton, setBackButton] = useState<boolean>(true)

  const getAllCharacters = () => {
    fetch(
      `https://rickandmortyapi.com/api/character/?name=${characterName}&page=${currentPage}&species=${characterSpecies}`
    )
      .then(response => response.json())
      .then(data => {
        setCharacters(data.results)
      })
  }

  const handleChange = (value: string) => {
    setCharacterSpecies(value)
    setCurrentPage(1)
  }

  useEffect(() => {
    getAllCharacters()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [characterName, currentPage, characterSpecies])

  return (
    <DefaultLayout>
      <Styled.Header>
        <Styled.Input
          onChange={e => {
            if (e.target.value === '') {
              getAllCharacters()
            }
            setCharacterName(e.target.value)
            setCurrentPage(1)
          }}
          allowClear
        />
        <Select defaultValue="" style={{ width: 120 }} onChange={handleChange}>
          {species.map(specie => (
            <Option key={specie.label} value={specie.type}>
              {specie.label}
            </Option>
          ))}
        </Select>
      </Styled.Header>
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
      <Styled.Buttons>
        {/* {characters && characters.length >= 20 && ( */}
        <>
          {currentPage > 1 && (
            <Button
              className="button-prev"
              disabled={backButton}
              onClick={() => {
                if (currentPage === 2) {
                  setBackButton(true)
                }
                setCurrentPage(currentPage => currentPage - 1)
              }}
            >
              Anterior
            </Button>
          )}
          <div className="current-page">{currentPage}</div>
          {characters.length >= 20 && (
            <Button
              className="button-next"
              onClick={() => {
                if (currentPage >= 1) {
                  setBackButton(false)
                }
                setCurrentPage(currentPage => currentPage + 1)
              }}
            >
              Próximo
            </Button>
          )}
        </>
        {/* )} */}
      </Styled.Buttons>
    </DefaultLayout>
  )
}

export default CharactersComponent

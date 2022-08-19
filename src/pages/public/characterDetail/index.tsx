import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ICharacter } from '../../../interfaces/character'

const CharacterDetail = () => {
  const { id } = useParams()

  const [character, setCharacter] = useState<ICharacter>()

  const getCharacter = () => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then(response => response.json())
      .then(data => {
        setCharacter(data)
      })
  }

  useEffect(() => {
    getCharacter()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      {character ? <h1>{character.name}</h1> : <h1>nada encontrado</h1>}
    </div>
  )
}

export default CharacterDetail

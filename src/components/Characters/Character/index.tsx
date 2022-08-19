import { useState } from 'react'
import { ICharacter } from '../../../interfaces/character'
import DetailsModal from '../Details'
import * as Styled from './styled'

interface CharacterTileProps {
  character: ICharacter
}

const CharacterTile = ({ character }: CharacterTileProps) => {
  const [isDetailsVisible, setIsDetailsVisible] = useState<boolean>(false)

  const close = () => {
    setIsDetailsVisible(false)
  }

  return (
    <>
      <Styled.Char>
        <Styled.CharContainer
          onClick={() => {
            setIsDetailsVisible(true)
          }}
        >
          <img
            src={character.image}
            alt="char_image"
            height={100}
            width={100}
          />
          <Styled.CharInfo>
            <Styled.CharName>Nome: {character.name}</Styled.CharName>
            <Styled.CharStatus>
              Status: <div className="status">{character.status}</div>
            </Styled.CharStatus>
          </Styled.CharInfo>
        </Styled.CharContainer>
      </Styled.Char>

      {isDetailsVisible && (
        <DetailsModal
          isVisible={isDetailsVisible}
          character={character}
          close={close}
        />
      )}
    </>
  )
}

export default CharacterTile

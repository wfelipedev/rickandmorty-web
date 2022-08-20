import { useState } from 'react'
import { ICharacter } from '../../../interfaces'
import DetailsModal from '../Details'
import * as Styled from './styled'

interface CharacterCardProps {
  character: ICharacter
}

const CharacterCard = ({ character }: CharacterCardProps) => {
  const [isDetailsVisible, setIsDetailsVisible] = useState<boolean>(false)

  const close = () => {
    setIsDetailsVisible(false)
  }

  return (
    <>
      <Styled.Char
        onClick={() => {
          setIsDetailsVisible(true)
        }}
      >
        <Styled.CharContainer>
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

export default CharacterCard

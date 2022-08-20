import { useQuery } from '@apollo/client'
import { Button, Modal } from 'antd'
import { format } from 'date-fns'
import { useEffect, useState } from 'react'
import { useAuth } from '../../../context/useAuth'
import { GET_FAVORITES } from '../../../graphql/favorite'
import { ICharacter } from '../../../interfaces/character'
import { api } from '../../../services/api'
import { checkErrorProvide } from '../../../utils/checkError'
import { error as errorToast, success } from '../../../utils/toasts'
import * as Styled from './styles'

interface IDetailsProps {
  isVisible: boolean
  close: () => void
  character: ICharacter
}

const DetailsModal = ({ isVisible, close, character }: IDetailsProps) => {
  const { user, isAuthenticated } = useAuth()
  const { data, refetch } = useQuery(GET_FAVORITES)

  const [contains, setContains] = useState<boolean>(false)
  const [selectedCharacter, setSelectedCharacter] = useState<ICharacter>()

  const handleFavorite = async () => {
    try {
      const entity = {
        char_id: character.id,
        name: character.name,
        status: character.status,
        species: character.species,
        type: character.type,
        gender: character.gender,
        origin: {
          name: character.origin.name,
          url: character.origin.url,
        },
        location: {
          name: character.location.name,
          url: character.location.url,
        },
        image: character.image,
        episode: character.episode,
        url: character.url,
        created: character.created,
      }

      const { data } = await api.post('/favorite-char', entity)

      success(data.msg)

      refetch()
      setContains(true)
      close()
    } catch (err: any) {
      errorToast(checkErrorProvide(err))
    }
  }

  const handleRemove = async () => {
    try {
      const { data } = await api.delete(
        `/favorite-char/${selectedCharacter?.id}/delete`
      )

      success(data.msg)

      refetch()
      setContains(false)
      close()
    } catch (err: any) {
      errorToast(checkErrorProvide(err))
    }
  }

  useEffect(() => {
    if (data) {
      data.getFavorites.map((item: ICharacter) => {
        if (item.name === character.name) {
          setSelectedCharacter(item)
          setContains(true)
        }
      })
    }
  }, [character.name, data])

  return (
    <Modal
      title="Detalhes do Personagem"
      centered
      visible={isVisible}
      width={500}
      onOk={close}
      onCancel={close}
      footer={null}
    >
      <Styled.Container>
        <Styled.Image src={character.image} />
        <Styled.CharInfo>
          <Styled.Field>Nome: {character.name}</Styled.Field>
          <Styled.Field>Status: {character.status}</Styled.Field>
          <Styled.Field>Especie: {character.species}</Styled.Field>
          <Styled.Field>Origem: {character.origin.name}</Styled.Field>
          <Styled.Field>
            Quantidade de Episodios: {character.episode.length}
          </Styled.Field>
          <Styled.Field>
            Data de criação: {format(new Date(character.created), 'dd/MM/yyyy')}
          </Styled.Field>
        </Styled.CharInfo>
        {user && isAuthenticated && (
          <Styled.Buttons>
            <Button
              className={contains ? 'delete' : 'search'}
              onClick={contains ? handleRemove : handleFavorite}
            >
              {contains ? 'Remover dos Favoritos' : 'Adicionar aos Favoritos'}
            </Button>
          </Styled.Buttons>
        )}
      </Styled.Container>
    </Modal>
  )
}

export default DetailsModal

import CharactersComponent from '../../../components/Characters'
import { ISEOProps } from '../../../interfaces'

const Characters = ({ title }: ISEOProps) => {
  document.title = title

  return <CharactersComponent />
}

export default Characters

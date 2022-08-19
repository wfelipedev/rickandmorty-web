import { FavoritesComponent } from '../../../components/Favorites'
import { ISEOProps } from '../../../interfaces'

const Favorites = ({ title }: ISEOProps) => {
  document.title = title

  return <FavoritesComponent />
}

export default Favorites

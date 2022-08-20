export interface ICharacter {
  id?: number
  char_id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: {
    name: string
    url: string
  }
  location: {
    name: string
    url: string
  }
  image: string
  episode: string[]
  episodes?: string[]
  url: string
  created: string
}

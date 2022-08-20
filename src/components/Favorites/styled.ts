import styled from 'styled-components'

export const Header = styled.div`
  height: 5rem;
  padding: 0 3rem;
  margin: 1.5rem 0;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  .titleContainer {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .title {
    font-size: 1rem;
    font-weight: 600;
  }

  .buttonContainer {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
  }
`

export const Characters = styled.div`
  height: 100%;
  padding: 0 3rem;
  margin: 1.5rem 0;

  display: flex;
`

export const CharacterSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100%;
  width: 100%;
`
interface CharacterGridProps {
  tablet1439: boolean
  tablet1200: boolean
  tablet768: boolean
}

export const CharacterGrid = styled.div<CharacterGridProps>`
  height: 100%;
  width: 100%;

  display: grid;
  grid-template-columns: ${({ tablet1439, tablet1200, tablet768 }) =>
    tablet1439 && !tablet1200 && !tablet768
      ? '1fr 1fr 1fr'
      : tablet1200 && !tablet768
      ? '1fr 1fr'
      : tablet768
      ? '1fr'
      : '1fr 1fr 1fr 1fr'};
  grid-auto-rows: 1;
  grid-gap: 8px;

  justify-content: center;
  align-items: center;
`

import styled from 'styled-components'
import { Input as AntdInput, Button as AntdButton } from 'antd'

export const Header = styled.div`
  height: 2rem;
  padding: 0 3rem;
  margin: 1.5rem 0;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;

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

export const Input = styled(AntdInput)`
  width: 30%;

  border-radius: 0.3rem;
`

export const CtaSearch = styled(AntdButton)`
  background: #f28972;
  color: white;
  font-weight: bold;

  border-radius: 0.3rem;
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
}

export const CharacterGrid = styled.div<CharacterGridProps>`
  height: 100%;
  width: 100%;

  display: grid;
  grid-template-columns: ${({ tablet1439, tablet1200 }) =>
    tablet1439 && !tablet1200
      ? '1fr 1fr 1fr'
      : tablet1200
      ? '1fr 1fr'
      : '1fr 1fr 1fr 1fr'};
  grid-auto-rows: 1;
  grid-gap: 8px;

  justify-content: center;
  align-items: center;
`

export const Buttons = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`

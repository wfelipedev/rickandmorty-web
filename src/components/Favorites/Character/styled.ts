import styled from 'styled-components'

export const Char = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;

  justify-content: space-between;

  background: #fff;

  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;
  transition: 0.3s;
  padding: 0.8rem;

  &:hover {
    box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
`

export const CharContainer = styled.div`
  display: flex;
  flex-direction: row;

  gap: 0.3rem;
`

export const CharName = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;

  font-size: 1rem;
`

export const CharLocation = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;

  font-size: 0.8rem;
`

export const CharStatus = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;

  font-size: 0.8rem;

  .status {
    font-size: 0.8rem;
    padding: 0 0.2rem;
    margin-left: 0.2rem;
    font-weight: bold;
  }
`

export const CharInfo = styled.div`
  display: flex;
  flex-direction: column;
`

import { transparentize } from 'polished'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  gap: 1rem;
`

export const Image = styled.img`
  height: 128px;
  width: 128px;

  border-radius: 0.3rem;
`

export const CharInfo = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
`

export const Field = styled.div`
  display: flex;
  flex-direction: row;
`

export const Buttons = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  .search {
    background: #6d6eab;
    color: white;
    border: none;

    &:hover {
      transition: 0.3s;
      background: ${transparentize(0.1, '#6d6eab')};
    }
  }

  .delete {
    background: #ff5252;
    color: white;
    border: none;

    &:hover {
      transition: 0.3s;
      background: ${transparentize(0.1, '#6d6eab')};
    }
  }
`

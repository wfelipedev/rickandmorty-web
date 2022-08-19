import { transparentize } from 'polished'
import styled from 'styled-components'

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  justify-content: flex-end;
  align-items: center;
  gap: 0.5rem;

  .cancel {
    background: white;
    border: 1px solid ${transparentize(0.5, '#ff5252')};
    color: ${transparentize(0.5, '#ff5252')};
    width: 6rem;

    &:hover {
      border: 1px solid ${transparentize(0.1, '#ff5252')};
      color: ${transparentize(0.1, '#ff5252')};
    }
  }

  .submit {
    background: #333;
    color: white;
    border: 1px solid ${transparentize(0.5, '#333')};
    width: 6rem;

    &:hover {
      background: ${transparentize(0.1, '#333')};
    }
  }
`

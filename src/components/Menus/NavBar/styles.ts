import styled from 'styled-components'
import { Input as AntdInput, Button as AntdButton } from 'antd'
import { transparentize } from 'polished'

export const Input = styled(AntdInput)`
  width: 100%;
  padding: 8px;
  border-radius: 0.2rem;
`

export const Menus = styled.div`
  margin-left: 1rem;

  display: flex;
  flex-direction: row;

  width: 100%;

  justify-content: space-between;
  align-items: center;

  .user-avatar {
    background: #590242;
    user-select: none;
    cursor: pointer;
  }

  .settings {
    cursor: pointer;
  }

  .actions {
    display: flex;
    flex-direction: row;
    gap: 1rem;

    align-items: center;
  }
`

export const Logo = styled.div`
  height: 64px;
  margin: 16px 24px;
  background: rgba(255, 255, 255, 0.3);

  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;

  cursor: pointer;
`

export const Button = styled(AntdButton)`
  height: 2.5rem;
  width: 5rem;

  background: #f28972;
  color: white;

  font-weight: bold;

  border: none;
  border-radius: 0.3rem;

  text-transform: none;

  cursor: pointer;
  transition: 0.3s;

  .progress {
    color: #fff;
  }

  &:hover {
    transition: 0.3s;
    background: ${transparentize(0.1, '#F28972')};

    color: white;
    border: 0px solid;
  }
`

export const Icon = styled.div`
  display: flex;
  flex-direction: column;

  cursor: pointer;
`

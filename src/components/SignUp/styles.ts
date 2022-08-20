import { transparentize } from 'polished'
import styled from 'styled-components'
import { Input as AntdInput, Button as AntdButton } from 'antd'
import background from '../../assets/background.png'

export const Main = styled('div')`
  height: 100vh;
  width: 100%;

  background: #f1f1f1;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  background: url(${background}) no-repeat center center;
  background-size: cover;

  @media (max-width: 1226px) {
    justify-content: center;
  }
`

export const Container = styled('div')`
  height: 32rem;
  width: 28rem;
  padding: 0 2rem;

  background: ${transparentize(0.35, 'white')};
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(1.9px);
  -webkit-backdrop-filter: blur(1.9px);

  border-radius: 0.5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 0.3s;

  box-shadow: 3.2px 3.2px 438.3px rgba(0, 0, 0, 0.011),
    2.4px 2.4px 576.8px rgba(0, 0, 0, 0.02),
    0.8px 0.8px 662.4px rgba(0, 0, 0, 0.029),
    -0.5px -0.5px 718.2px rgba(0, 0, 0, 0.036),
    -1px -1px 752.5px rgba(0, 0, 0, 0.042),
    0.2px 0.2px 768.8px rgba(0, 0, 0, 0.049),
    4px 4px 767.5px rgba(0, 0, 0, 0.06),
    12.2px 12.2px 746.1px rgba(0, 0, 0, 0.075),
    29px 29px 694.6px rgba(0, 0, 0, 0.092),
    100px 100px 500px rgba(0, 0, 0, 0.11);

  form {
    width: 100%;

    .ant-form-item {
      margin-bottom: 0.5rem;
    }
  }

  @media (max-width: 506px) {
    height: 100%;
    width: 100%;
    padding: 0 4rem;

    border-radius: 0;

    box-shadow: none;

    transition: 0.3s;
  }

  @media (max-width: 1226px) {
    margin-right: 0;
  }
`
export const Header = styled.div`
  margin: 0.8rem 0;

  font-size: 2rem;
  font-weight: bold;
`

export const TextContainer = styled('div')`
  margin-left: 9rem;
  width: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1.5rem;
  font-weight: bold;
  color: white;
`

export const TextfieldContainer = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const Input = styled(AntdInput)`
  height: 56px;
  padding: 16px 10px 4px 11px;

  border-radius: 0.3rem;
  border: none;
`

export const Button = styled(AntdButton)`
  height: 3.5rem;
  width: 100%;
  margin: 1.5rem 0;

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

export const BackLink = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: center;
  align-items: center;

  a {
    text-decoration: none;
    color: black;
    font-weight: bold;
  }
`

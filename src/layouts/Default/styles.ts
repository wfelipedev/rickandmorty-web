import styled, { css } from 'styled-components'
import { Button as AntdButton, Layout } from 'antd'

export const Sider = styled(Layout.Sider)`
  max-height: 100vh;
  overflow: scroll;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  background: white;

  &::-webkit-scrollbar {
    width: 4px;
    background: transparent;
  }

  &::-moz-scrollbar {
    width: 4px;
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 5px;
    height: 5px;
  }

  .ant-collapse-header {
    padding-left: 24px !important;
    color: rgba(255, 255, 255, 0.65) !important;
  }
`

export const Header = styled(Layout.Header)`
  background: #fff;
  color: rgba(255, 255, 255, 0.65);
  padding: 0 30px;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;

  border-left: 1px solid #f1f4f6;

  > button {
    background: transparent;
    display: flex;
    align-items: center;
    height: 100%;
    font-size: 16px;
    border: none;
    cursor: pointer;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.7);
    }
  }
`

export const Content = styled(Layout.Content)`
  background: #f2f5ff;
`

export const Container = styled.div`
  height: 100%;
  background: #f2f3f9;

  display: flex;
  flex-direction: column;
`

export const Logo = styled.div`
  height: 64px;
  margin: 16px 24px;
  background: rgba(255, 255, 255, 0.3);

  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
`
interface LogoSvgProps {
  collapsible: boolean
}

export const LogoSvg = styled.img<LogoSvgProps>`
  ${props =>
    props.collapsible
      ? css`
          display: none;
        `
      : css`
          height: 120px;
          width: 120px;
        `}
`
export const LogoButton = styled(AntdButton)`
  box-shadow: 0 2px 5px rgba(50, 50, 50, 0.5);
`

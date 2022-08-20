import { ReactNode } from 'react'
import { Layout } from 'antd'
// import './index.css'
import NavBar from '../../components/Menus/NavBar'
import * as Styled from './styles'

interface DefaultLayoutProps {
  children: ReactNode
}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <Layout>
      <Layout
        style={{
          transition: 'ease-in-out 0.3s',
          minHeight: '100vh',
        }}
      >
        <Styled.Header>
          <NavBar />
        </Styled.Header>
        <Styled.Content>
          <Styled.Container>{children}</Styled.Container>
        </Styled.Content>
      </Layout>
    </Layout>
  )
}

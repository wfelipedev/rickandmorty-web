import { useState } from 'react'
import * as Feather from 'react-feather'
import { Avatar, Dropdown, Menu, MenuProps } from 'antd'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../context/useAuth'
import SignOut from '../../SignOut'
import logo from '../../../assets/logo.png'
import * as Styled from './styles'

export default function NavBar() {
  const { user, isAuthenticated } = useAuth()
  const navigate = useNavigate()

  const [isVisible, setIsVisible] = useState<boolean>(false)

  const closeModal = () => {
    setIsVisible(false)
  }

  const handleMenuClick: MenuProps['onClick'] = e => {
    switch (e.key) {
      case 'signout':
        setIsVisible(true)
        // signOut()
        break
    }
  }

  const menuSettings = (
    <Menu
      onClick={handleMenuClick}
      items={[
        {
          key: 'signout',
          icon: <Feather.LogOut size={16} />,
          label: <a>Sair</a>,
        },
      ]}
    />
  )

  return (
    <>
      <Styled.Menus>
        <Styled.Logo onClick={() => navigate('/')}>
          <img src={logo} alt="logo" height={56} />
        </Styled.Logo>
        <div className="actions">
          {user && isAuthenticated ? (
            <>
              <Styled.Icon onClick={() => navigate('/favorites')}>
                <Feather.Heart size={24} color="#333" />
              </Styled.Icon>
              <Dropdown
                trigger={['click']}
                overlay={menuSettings}
                placement="bottomRight"
              >
                <Avatar className="user-avatar">
                  {user.name?.charAt(0).toUpperCase()}
                </Avatar>
              </Dropdown>
            </>
          ) : (
            <Styled.Button onClick={() => navigate('/signin')}>
              Entrar
            </Styled.Button>
          )}
        </div>
      </Styled.Menus>

      <SignOut isVisible={isVisible} closeModal={closeModal} />
    </>
  )
}

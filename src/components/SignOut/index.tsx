import { Button, Modal } from 'antd'
import { useAuth } from '../../context/useAuth'
import * as Styled from './styles'

interface ISignOutProps {
  isVisible: boolean
  closeModal: () => void
}

const SignOut = ({ isVisible, closeModal }: ISignOutProps) => {
  const { signOut } = useAuth()

  return (
    <Modal
      title="Sair"
      centered
      visible={isVisible}
      onOk={() => closeModal()}
      onCancel={() => closeModal()}
      width={600}
      footer={null}
    >
      Deseja mesmo sair?
      <Styled.Footer>
        <Button className="cancel" onClick={() => closeModal()}>
          Não
        </Button>
        <Button className="submit" onClick={signOut}>
          Sim
        </Button>
      </Styled.Footer>
    </Modal>
  )
}

export default SignOut

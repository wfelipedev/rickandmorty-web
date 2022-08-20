import { useCallback, useState } from 'react'
import { useFormik } from 'formik'
import { Form } from 'antd'
import { validationSchema } from './rules'
import FloatLabel from '../Commom/FloatingLabel'
import { ICredentials } from '../../interfaces'
import { useAuth } from '../../context/useAuth'
import * as Styled from './styles'

const initialValues: ICredentials = {
  name: '',
  password: '',
}

const SignInComponents = () => {
  const { signIn } = useAuth()

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (fields: ICredentials) => {
      handleSubmit(fields)
    },
  })

  const [loading, setLoading] = useState<boolean>(false)

  const handleSubmit = useCallback(
    (fields: ICredentials) => {
      setLoading(true)
      signIn(fields)
      setLoading(false)
    },
    [signIn]
  )

  return (
    <Styled.Main>
      <Styled.Container>
        <Styled.Header>Sign In</Styled.Header>
        <form onSubmit={formik.handleSubmit}>
          <Styled.TextfieldContainer>
            <Form.Item
              help={formik.touched.name && formik.errors.name}
              validateStatus={
                formik.touched.name && formik.errors.name ? 'error' : 'success'
              }
            >
              <FloatLabel label="Nome" value={formik.values.name}>
                <Styled.Input
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                />
              </FloatLabel>
            </Form.Item>

            <Form.Item
              help={formik.touched.password && formik.errors.password}
              validateStatus={
                formik.touched.password && formik.errors.password
                  ? 'error'
                  : 'success'
              }
            >
              <FloatLabel label="Senha" value={formik.values.password}>
                <Styled.Input
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  type="password"
                />
              </FloatLabel>
            </Form.Item>
          </Styled.TextfieldContainer>
          <Styled.Button
            htmlType="submit"
            loading={loading}
            disabled={loading}
            style={{ marginTop: '1rem' }}
          >
            Entrar
          </Styled.Button>
          <Styled.SignUpLink>
            <a href="/signup">Cadastrar-se</a>
          </Styled.SignUpLink>
        </form>
      </Styled.Container>
    </Styled.Main>
  )
}

export default SignInComponents

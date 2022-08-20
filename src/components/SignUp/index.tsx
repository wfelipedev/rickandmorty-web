import { useCallback, useState } from 'react'
import { Form } from 'antd'
import { useFormik } from 'formik'
import { ICredentials } from '../../interfaces'
import FloatLabel from '../Commom/FloatingLabel'
import { validationSchema } from './rules'
import * as Styled from './styles'
import { error, success } from '../../utils/toasts'
import { checkErrorProvide } from '../../utils/checkError'
import { api } from '../../services/api'
import { useNavigate } from 'react-router-dom'

const initialValues: ICredentials = {
  name: '',
  password: '',
}

const SignUpComponent = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (fields: ICredentials) => {
      handleSubmit(fields)
    },
  })

  const handleSubmit = useCallback(
    async (fields: ICredentials) => {
      setLoading(true)

      try {
        const { data } = await api.post('/auth/signup', fields)

        success(data.msg)

        navigate('/signin')
      } catch (err: any) {
        error(checkErrorProvide(err))
      }

      setLoading(false)
    },
    [navigate]
  )

  return (
    <Styled.Main>
      <Styled.Container>
        <Styled.Header>Sign Up</Styled.Header>
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
            Cadastrar
          </Styled.Button>
          <Styled.BackLink>
            <a href="/signin">Voltar</a>
          </Styled.BackLink>
        </form>
      </Styled.Container>
    </Styled.Main>
  )
}

export default SignUpComponent

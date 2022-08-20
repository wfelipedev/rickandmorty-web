import * as yup from 'yup'

export const validationSchema = yup.object({
  name: yup
    .string()
    .min(3, 'Nome deve contem pelo menos 3 caracteres')
    .required('Campo nome é obrigatório!'),
  password: yup
    .string()
    .min(5, 'Senha deve conter pelo menos 5 caracteres')
    .required('Campo senha é obrigatório!'),
})

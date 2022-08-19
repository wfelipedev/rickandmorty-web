export const cepValidationLength = (cep: string) => {
  const value = cep.replace(/\D/g, '')

  if (value.length === 8) return true
  return false
}

export const cnpjValidationLength = (cnpj: string) => {
  const value = cnpj.replace(/\D/g, '')

  if (value.length === 14) return true
  return false
}

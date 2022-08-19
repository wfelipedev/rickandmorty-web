export const cnpjMask = (value: string) =>
  value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1/$2')
    .replace(/(\d{4})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1')

export const cpfMask = (value: string) =>
  value
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1')

export const cepMask = (value: string) =>
  value
    .replace(/\D/g, '')
    .replace(/(\d{5})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{3})\d+?$/, '$1')

export const phoneMask = (value: string) =>
  value
    .replace(/\D/g, '')
    .replace(/(\d{0})(\d)/, '$1($2')
    .replace(/(\d{2})(\d)/, '$1) $2')
    .replace(/(\d{4})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{4})\d+?$/, '$1')

export const cellphoneMask = (value: string) =>
  value
    .replace(/\D/g, '')
    .replace(/(\d{0})(\d)/, '$1($2')
    .replace(/(\d{2})(\d)/, '$1) $2')
    .replace(/(\d{5})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{4})\d+?$/, '$1')

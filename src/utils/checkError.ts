interface IheckErrorProvide {
  response: {
    data: {
      message: string | string[]
    }
  }
}

export const checkErrorProvide = (e: IheckErrorProvide): string => {
  const { response } = e

  const message = Array.isArray(response?.data.message)
    ? response.data.message[0]
    : response?.data.message

  return message
}

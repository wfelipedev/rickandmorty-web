import toast from 'react-hot-toast'

export const success = (msg: string) =>
  toast.success(msg, {
    position: 'top-center',
  })

export const error = (msg: string) =>
  toast.error(msg, {
    position: 'top-center',
  })

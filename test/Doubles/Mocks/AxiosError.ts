import { AxiosError } from 'axios'

export const mockAxiosError = (message, code): AxiosError => {
  return {
    message: message,
    response: {
      status: code,
      statusText: message,
      data: { 
        message: message,
        code: code
      },
    }
  } as AxiosError
}
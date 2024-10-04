import { AxiosError } from 'axios'

export class RestException extends Error {
  public code: number = 0

  constructor(error: AxiosError) {
    super(error.message)

    if (error.response) {
      this.handleResponse(error.response)
    }
  }

  private handleResponse(response: any): void {
    this.code = response.status
  }
}
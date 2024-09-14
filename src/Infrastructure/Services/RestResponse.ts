import { AxiosResponse } from 'axios'

export class RestResponse<T = any> {
  protected readonly MIN_STATUS_OK = 200
  protected readonly MAX_STATUS_OK = 299

  protected data: T
  protected status: number

  constructor () {
    this.data = null
    this.status = 0
  }

  public add(response: AxiosResponse): void {
    this.handleResult(response.data)
  }

  private handleResult(data: any): void {
    this.data = data
  }

  getData(): T {
    return this.data
  }

  getStatus(): number {
    return this.status
  }
}
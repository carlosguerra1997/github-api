import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios'

import { RestException } from '@infrastructure/Services/RestException'
import { RestRequest } from '@infrastructure/Services/RestRequest'
import { RestResponse } from '@infrastructure/Services/RestResponse'

export abstract class Rest {
  protected constructor(
    protected domain: string = '',
    protected client: AxiosInstance = null
  ) {
    this.domain = domain

    if (client === null) {
      this.client = axios.create()
    }
  }

  protected async call(request: RestRequest): Promise<RestResponse> {
    try {
      return await this.internalCall(request)
    } catch (error) {
      this.throwException(error)
    }
  }

  private async internalCall(request: RestRequest): Promise<any> {
    const response = this.buildResponse()

    const config = this.handleRequest(request)
    const clientResponse = await this.client.request(config)
    response.add(clientResponse)
    return response
  }

  private handleRequest(request: RestRequest): AxiosRequestConfig {
    return request.getConfig(this.domain)
  }

  protected buildResponse(): RestResponse {
    return new RestResponse()
  }

  protected throwException(err: AxiosError): void {
    const error = new RestException(err)
    throw error
  }
}
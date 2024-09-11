import { AxiosRequestConfig } from "axios"

export class RestRequest {
  protected static GET_METHOD = 'GET'

  protected method: string
  protected path: string
  protected headers: Map<string, string>
  protected params: Map<string, string>

  constructor (method: string = RestRequest.GET_METHOD) {
    this.method = method
    this.headers = new Map()
    this.params = new Map()
  }

  public read(path: string): RestRequest {  
    this.method = RestRequest.GET_METHOD
    this.path = path
    return this
  }

  public list(path: string, query: string = null): RestRequest {
    this.method = RestRequest.GET_METHOD
    this.path = path
    return this
  }
 
  public header(name: string, value: string): RestRequest {
    this.headers.set(name, value)
    return this
  }

  public param(name: string, value: any): RestRequest {
    this.params.set(name, value)
    return this
  }

  public getConfig(domain: string): AxiosRequestConfig {
    const config: AxiosRequestConfig = {
      url: this.getEndpoint(domain),
      method: this.method
    }

    if (this.headers.size > 0) {
      config.headers = Object.fromEntries(this.headers.entries())
    }

    if (this.params.size > 0) {
      config.params = Object.fromEntries(this.params.entries())
    }

    return config
  }

  private getEndpoint(domain: string): string {
    try {
      return new URL(this.path, domain).toString()
    } catch (error) {}
  }
}
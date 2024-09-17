import { ListQuery } from '@domain/Identity/List/ListQuery'

import { RestRequest } from '@infrastructure/Services/RestRequest'

export class GithubRequest extends RestRequest {
  constructor() {
    super()
    this.header('Accept', 'application/vnd.github.v3+json')
  }

  public static search(path: string): RestRequest {
    const request = new GithubRequest()
    request.read(path)
    return request
  }

  public static list(path: string, query: ListQuery): RestRequest {
    const request = new GithubRequest()
    request.list(path, query)
    return request
  }
}
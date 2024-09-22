import { ConfigService } from '@nestjs/config'
import { Injectable } from '@nestjs/common'

import { Configuration, GithubConfig } from '@config/Configuration'

import { ListQuery } from '@domain/Identity/List/ListQuery'

import { GithubRepositoryRestRepository } from '@infrastructure/Services/Github/Rest/Repository/GithubRepositoryRestRepository'
import { GithubRepositoryActivityData, GithubRepositoryData } from '@infrastructure/Services/Github/Rest/Repository/GithubRepositoryResponse'
import { GithubRequest } from '@infrastructure/Services/Github/GithubRequest'

import { Rest } from '@infrastructure/Services/Rest'
import { RestResponse } from '@infrastructure/Services/RestResponse'

@Injectable()
export class GithubRepositoryRest extends Rest implements GithubRepositoryRestRepository {
  protected githubConfig: GithubConfig

  constructor(
    protected config: ConfigService<Configuration>
  ) {
    super()

    this.githubConfig = this.config.get<GithubConfig>('github')
    this.domain = this.githubConfig.baseApiUrl
  }

  async obtainRepository(owner: string, repo: string): Promise<GithubRepositoryData> {
    const path = this.githubConfig.endpoints.repository.getRepository(owner, repo)
    const request = GithubRequest.search(path)
    const response: RestResponse<GithubRepositoryData> = await this.call(request)
    return response.getData()
  }

  async obtainRepositoryActivity(owner: string, repo: string, query: ListQuery): Promise<GithubRepositoryActivityData[]> {
    const path = this.githubConfig.endpoints.repository.getRepositoryActivity(owner, repo)
    const request = GithubRequest.list(path, query)
    const response: RestResponse<GithubRepositoryActivityData[]> = await this.call(request)
    return response.getData()
  }

  async obtainUserPublicRepositories(user: string, query: ListQuery): Promise<GithubRepositoryData[]> {
    const path = this.githubConfig.endpoints.repository.getUserPublicRepositories(user)
    const request = GithubRequest.list(path, query)
    const response: RestResponse<GithubRepositoryData[]> =  await this.call(request)
    return response.getData()
  }
}
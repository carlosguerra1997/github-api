import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { AxiosError } from 'axios'

import { Configuration, GithubConfig } from '@config/Configuration'

import { GithubUserRestRepository } from '@infrastructure/Services/Github/Rest/User/GithubUserRestRepository'
import { GithubRequest } from '@infrastructure/Services/Github/GithubRequest'
import { GithubUserData, GithubUserResponse } from '@infrastructure/Services/Github/Rest/User/GithubUserResponse'
import { GithubUserRestException } from '@infrastructure/Services/Github/Rest/User/GithubUserRestException'
import { Rest } from '@infrastructure/Services/Rest'
import { RestResponse } from '@infrastructure/Services/RestResponse'

@Injectable()
export class GithubUserRest extends Rest implements GithubUserRestRepository {
    protected githubConfig: GithubConfig

    constructor(protected config: ConfigService<Configuration>) {
      super()
    
      this.githubConfig = this.config.get<GithubConfig>('github')
      this.domain = this.githubConfig.baseApiUrl
    }

    async obtainUser (user: string): Promise<GithubUserData> {
      const path = this.githubConfig.endpoints.user.getUser(user)
      const request = GithubRequest.search(path)
      const response: RestResponse<GithubUserData> = await this.call(request)
      return response.getData()
    }

    async obtainhUserFollowers(user: string): Promise<GithubUserData[]> {
      const path = this.githubConfig.endpoints.user.getUserFollowers(user)
      const request = GithubRequest.search(path)
      const response: RestResponse<GithubUserData[]> = await this.call(request)
      return response.getData()
    }

    async obtainhUserFollowing(user: string): Promise<GithubUserData[]> {
      const path = this.githubConfig.endpoints.user.getUserFollowing(user)
      const request = GithubRequest.search(path)
      const response: RestResponse<GithubUserData[]> = await this.call(request)
      return response.getData()
    }

    protected buildResponse(): RestResponse {
      return new GithubUserResponse()
    }

    protected throwException(err: AxiosError): void {
      throw new GithubUserRestException(err)
    }
}
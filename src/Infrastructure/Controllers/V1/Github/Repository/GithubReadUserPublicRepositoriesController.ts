import { Controller, Get, HttpStatus, InternalServerErrorException, Param, Query } from '@nestjs/common'

import { GithubUserPublicRepositoriesRead } from '@application/Github/Repository/UserPublicRepositoriesReader/GithubUserPublicRepositoriesRead'
import { GithubUserPublicRepositoriesReadParams } from '@application/Github/Repository/UserPublicRepositoriesReader/GithubUserPublicRepositoriesReadParams'
import { GithubUserPublicRepositoriesReadQuery } from '@application/Github/Repository/UserPublicRepositoriesReader/GithubUserPublicRepositoriesReadQuery'
import { GithubUserNotFoundException } from '@application/Github/Exception/GithubUserNotFoundException'

import { RestException } from '@infrastructure/Services/RestException'

import { Result } from '@presentation/Identity/Result'
import { GithubRepositoryListView } from '@presentation/Github/Repository/GithubRepositoryListView'

@Controller('/v1/repo')
export class GithubReadUserPublicRepositoriesController {
  constructor(
    private reader: GithubUserPublicRepositoriesRead
  ) {}

  @Get('/users/:user/repos')
  async readUserPublicRepositories(
    @Param() params: GithubUserPublicRepositoriesReadParams,
    @Query() query: GithubUserPublicRepositoriesReadQuery
  ): Promise<Result> {
    const { user } = params

    try {
      const repositories = await this.reader.dispatch(user, query)
      const result = new GithubRepositoryListView(repositories)
      return result
    } catch (error) {
      if (error instanceof RestException) {
        if (error.code === HttpStatus.NOT_FOUND) {
          throw new GithubUserNotFoundException()
        }
      }

      throw new InternalServerErrorException(error.message)
    }
  }
}
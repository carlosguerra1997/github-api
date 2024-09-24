import { Controller, Get, Param } from '@nestjs/common'

import { GithubUserRead } from '@application/Github/User/Reader/GithubUserRead'

import { GithubUserReadView } from '@presentation/Github/User/GithubUserReadView'
import { Result } from '@presentation/Identity/Result'

@Controller('/v1/user')
export class GithubReadUserController {
  constructor(
    private reader: GithubUserRead
  ) {}

  @Get(':user')
  async readUser(@Param('user') user: string): Promise<Result> {
    try {
      const githubUser = await this.reader.dispatch(user)
      const result = new GithubUserReadView(githubUser)
      return result
    } catch (error) {
      // Gestionar excepciones
    }
  }
}

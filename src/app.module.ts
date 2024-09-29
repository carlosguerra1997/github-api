import { Module } from '@nestjs/common'

import { DefaultController } from '@common/Infrastructure/Controllers/DefaultController'

import { CommonModule } from '@common/Infrastructure/CommonModule'
import { GithubModule } from '@modules/Infrastructure/EntityModules/GithubModule'

@Module({
  controllers: [
    DefaultController
  ],
  imports: [
    CommonModule,
    GithubModule
  ],
  providers: [],
})
export class AppModule {}

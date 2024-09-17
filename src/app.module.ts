import { Module } from '@nestjs/common'

import { DefaultController } from '@infrastructure/Controllers/DefaultController'

import { CommonModule } from '@infrastructure/Modules/CommonModule'
import { GithubModule } from '@infrastructure/Modules/GithubModule'

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

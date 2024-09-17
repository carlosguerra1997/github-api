import { Module } from '@nestjs/common'

import { CommonModule } from '@infrastructure/Modules/CommonModule'

import { GithubEventRest } from '@infrastructure/Services/Github/Rest/Event/GithubEventRest'
import { GithubUserRest } from '@infrastructure/Services/Github/Rest/User/GithubUserRest'
import { GithubRepositoryRest } from '@infrastructure/Services/Github/Rest/Repository/GithubRepositoryRest'
import { RestGithubEventRepository } from '@infrastructure/Persistence/WebService/Github/Repository/RestEventRepository'
import { RestGithubRepositoryRepository } from '@infrastructure/Persistence/WebService/Github/Repository/RestGithubRepositoryRepository'
import { RestGithubUserRepository } from '@infrastructure/Persistence/WebService/Github/Repository/RestGithubUserRepository'

import { GithubListUserActivityController } from '@infrastructure/Controllers/V1/Github/Event/GithubReadUserActivityController'
import { GithubReadUserController } from '@infrastructure/Controllers/V1/Github/User/GithubReadUserController'
import { GithubReadUserFollowersController } from '@infrastructure/Controllers/V1/Github/User/GithubReadUserFollowersController'
import { GithubReadUserFollowingController } from '@infrastructure/Controllers/V1/Github/User/GithubReadUserFollowingController'

import { GithubReadRepositoryController } from '@infrastructure/Controllers/V1/Github/Repository/GithubReadRepositoryController'
import { GithubReadRepositoryActivityController } from '@infrastructure/Controllers/V1/Github/Repository/GithubReadRepositoryActivityController'
import { GithubReadUserPublicRepositoriesController } from '@infrastructure/Controllers/V1/Github/Repository/GithubReadUserPublicRepositoriesController'

import { GithubEventRepository } from '@domain/Github/Event/GithubEventRepository'
import { GithubRepositoryRepository } from '@domain/Github/Repository/GithubRepositoryRepository'
import { GithubUserRepository } from '@domain/Github/User/GithubUserRepository'

import { GithubActivityRead } from '@application/Github/ActivityReader/GithubActivityRead'
import { GithubUserRead } from '@application/Github/User/Reader/GithubUserRead'
import { GithubUserFollowersRead } from '@application/Github/User/FollowersReader/GithubUserFollowersRead'
import { GithubUserFollowingRead } from '@application/Github/User/FollowingReader/GithubUserFollowingRead'

import { GithubRepositoryRead } from '@application/Github/Repository/Reader/GithubRepositoryRead'
import { GithubRepositoryActivityRead } from '@application/Github/Repository/RepositoryActivityReader/GithubRepositoryActivityRead'
import { GithubUserPublicRepositoriesRead } from '@application/Github/Repository/UserPublicRepositoriesReader/GithubUserPublicRepositoriesRead'

@Module({
  controllers: [
    GithubListUserActivityController,
    // User
    GithubReadUserController,
    GithubReadUserFollowersController,
    GithubReadUserFollowingController,
    // Repository
    GithubReadRepositoryController,
    GithubReadRepositoryActivityController,
    GithubReadUserPublicRepositoriesController
  ],
  imports: [
    CommonModule
  ],
  providers: [
    GithubActivityRead,
    // User
    GithubUserRead,
    GithubUserFollowersRead,
    GithubUserFollowingRead,
    GithubEventRest,
    GithubUserRest,
    // Repository
    GithubRepositoryRead,
    GithubRepositoryActivityRead,
    GithubUserPublicRepositoriesRead,
    GithubRepositoryRest,
    { provide: GithubEventRepository, useClass: RestGithubEventRepository },
    { provide: GithubUserRepository, useClass: RestGithubUserRepository },
    { provide: GithubRepositoryRepository, useClass: RestGithubRepositoryRepository }
  ],
  exports: []
})
export class GithubModule {}
import { ConfigModule } from '@nestjs/config'
import { Module } from '@nestjs/common'

import config from '@config/index'

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [config]
    })
  ],
  providers: [],
  exports: [
    ConfigModule
  ]
})
export class CommonModule {}
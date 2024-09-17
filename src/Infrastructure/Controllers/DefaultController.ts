import { Controller, Get } from '@nestjs/common'

@Controller()
export class DefaultController {
  @Get()
  getIndex(): any {
    return 'Success';
  }
}
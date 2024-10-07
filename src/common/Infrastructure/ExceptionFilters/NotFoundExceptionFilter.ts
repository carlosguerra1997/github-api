import { ArgumentsHost, Catch, ExceptionFilter, NotFoundException } from '@nestjs/common'

type NotFoundExceptionFilterBody = {
  message: string
  status: number
}

@Catch(NotFoundException)
export class NotFoundExceptionFilter implements ExceptionFilter {
  private body: NotFoundExceptionFilterBody 

  catch(exception: NotFoundException, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse()
    const status = exception.getStatus()

    this.handleResponse(exception, status)
    response.status(status).json(this.body)
  }

  private handleResponse (exception: NotFoundException, status: number) {
    this.body = {
      message: exception.message,
      status
    }
  }
}

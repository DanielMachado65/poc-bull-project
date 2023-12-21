import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { QueryJob } from './domain/query.job';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly _queryJob: QueryJob,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/add-job')
  async addJob(@Body() body: { name: string }): Promise<boolean> {
    const response: unknown = await this._queryJob.addJob(body.name);
    console.log(response);
    return true;
  }
}

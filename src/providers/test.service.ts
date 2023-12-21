import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bullmq';
import { Queue } from 'bullmq';
import { QueryJob } from 'src/domain/query.job';

@Injectable()
export class TestService implements QueryJob {
  constructor(@InjectQueue('testQueue') private readonly queue: Queue) {}

  async addJob(name: string): Promise<void> {
    await this.queue.add('testJob', { name });
  }
}

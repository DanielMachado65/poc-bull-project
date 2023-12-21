import { Processor, WorkerHost, OnWorkerEvent } from '@nestjs/bullmq';
import { Job } from 'bullmq';

@Processor('testQueue')
export class TestConsumerEvent extends WorkerHost {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async process(job: Job<any, any, string>): Promise<any> {
    console.log('processing job');
  }

  @OnWorkerEvent('completed')
  onCompleted() {
    console.log('completed');
  }
}

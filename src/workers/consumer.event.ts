import { Processor, WorkerHost, OnWorkerEvent } from '@nestjs/bullmq';
import { Job } from 'bullmq';

@Processor('testQueue')
export class ConsumerEvent extends WorkerHost {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async process(job: Job<any, any, string>): Promise<any> {
    console.log('processing job');
    console.log(job);
  }

  @OnWorkerEvent('completed')
  onCompleted() {
    // do some stuff
  }
}

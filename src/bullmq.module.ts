import { Module, Provider } from '@nestjs/common';
import { BullModule } from '@nestjs/bullmq';
import { QueryJob } from './domain/query.job';
import { TestService } from './providers/test.service';
import { TestConsumerEvent } from './consumer/test.consumer.event';

const providers: ReadonlyArray<Provider> = [
  {
    provide: QueryJob,
    useClass: TestService,
  },
];

@Module({
  imports: [
    BullModule.forRoot({
      connection: {
        host: '127.0.0.1',
        port: 6379,
      },
    }),
    BullModule.registerQueue({
      name: 'testQueue',
    }),
  ],
  providers: [...providers, TestConsumerEvent],
  exports: [...providers],
})
export class BullmqModule {}

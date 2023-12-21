import { Processor, WorkerHost, OnWorkerEvent } from '@nestjs/bullmq';
import { Job } from 'bullmq';

@Processor('testQueue')
export class TestConsumerEvent extends WorkerHost {
  async process(job: Job<any, any, string>): Promise<any> {
    console.log('Início do processamento', job.data);

    // Espera por 30 segundos
    await new Promise((resolve) => setTimeout(resolve, 30000));

    console.log('Processamento concluído após 30 segundos');
  }

  @OnWorkerEvent('completed')
  onCompleted() {
    console.log('completed');
  }
}

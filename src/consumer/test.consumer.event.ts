import { Processor, WorkerHost, OnWorkerEvent } from '@nestjs/bullmq';
import { Job } from 'bullmq';

@Processor('testQueue')
export class TestConsumerEvent extends WorkerHost {
  private isProcessing = false;

  async process(job: Job<any, any, string>): Promise<any> {
    if (this.isProcessing) {
      console.log('Já existe um processamento ativo, ignorando este job');
      return;
    }

    this.isProcessing = true;
    console.log('Início do processamento', job.data);

    // Espera por 30 segundos
    await new Promise((resolve) => setTimeout(resolve, 30000));

    console.log('Processamento concluído após 30 segundos');
    this.isProcessing = false;
  }

  @OnWorkerEvent('completed')
  onCompleted() {
    console.log('completed');
    this.isProcessing = false;
  }
}

export enum JobQueue {
  QUERY = 'query',
}

export type JobOptions = {
  readonly delay?: number;
  readonly removeOnComplete?: boolean;
};

export abstract class QueryJob {
  addJob: (name: string) => Promise<void>;
}

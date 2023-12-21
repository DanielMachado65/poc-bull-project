export abstract class QueryJob {
  addJob: (name: string) => Promise<void>;
}

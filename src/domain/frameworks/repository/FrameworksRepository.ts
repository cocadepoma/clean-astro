import type { Framework } from "../entities/Framework";

export interface FrameworksRepository {
  getFrameworks(): Promise<Framework[]>;
}
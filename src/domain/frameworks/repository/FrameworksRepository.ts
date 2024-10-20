import type { Framework } from "../entities/Framework";

export enum FrameworkOrder {
  ASC = 'asc',
  DESC = 'desc',
}

export enum FrameworkSort {
  NAME = 'name',
  POPULARITY = 'POPULARITY',
}

export interface GetFrameworksParams {
  order: FrameworkOrder;
  sort: FrameworkSort;
  limit: number;
}

export interface FrameworksRepository {
  getFrameworks({ limit, order }: Partial<GetFrameworksParams>): Promise<Framework[]>;
  getFrameworkByName(name: string): Promise<Framework>;
}
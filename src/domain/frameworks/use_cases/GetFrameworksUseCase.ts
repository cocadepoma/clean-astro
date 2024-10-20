import type { FrameworksAPIRepository } from "@data/frameworks/FrameworksAPIRepository";
import { FrameworkOrder, FrameworkSort, type GetFrameworksParams } from "../repository/FrameworksRepository";

export class GetFrameworksUseCase {
  constructor(private repository: FrameworksAPIRepository) { }

  async execute({ limit, order = FrameworkOrder.DESC, sort = FrameworkSort.POPULARITY }: Partial<GetFrameworksParams>) {
    try {
      const frameworks = await this.repository.getFrameworks();
      const sortedFrameworks = frameworks.sort((a, b) => {
        if (sort === FrameworkSort.NAME) {
          return order === FrameworkOrder.ASC
            ? a.name.value.localeCompare(b.name.value)
            : b.name.value.localeCompare(a.name.value);
        } else if (sort === FrameworkSort.POPULARITY) {
          return order === FrameworkOrder.ASC
            ? a.popularity.value - b.popularity.value
            : b.popularity.value - a.popularity.value;
        } else {
          return 0;
        }
      });

      return sortedFrameworks.slice(0, limit);
    } catch (error) {
      throw new Error(`Error getting frameworks ${error}`);
    }
  }
}
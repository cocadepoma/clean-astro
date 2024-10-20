import type { FrameworksAPIRepository } from "@data/frameworks/FrameworksAPIRepository";

export class GetFrameworksUseCase {
  constructor(private repository: FrameworksAPIRepository) { }

  async execute() {
    try {
      return await this.repository.getFrameworks();
    } catch (error) {
      throw new Error(`Error getting frameworks ${error}`);
    }
  }
}
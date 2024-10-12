import type { FrameworksAPIRepository } from "@data/frameworks/FrameworksAPIRepository";

export class GetFrameworksUseCase {
  constructor(private repository: FrameworksAPIRepository) { }

  async execute() {
    return this.repository.getFrameworks();
  }
}
import type { FrameworksAPIRepository } from "@data/frameworks/FrameworksAPIRepository";

export class GetFrameworkByNameUseCase {
  constructor(private repository: FrameworksAPIRepository) { }

  async execute(name: string) {
    try {
      const frameworks = await this.repository.getFrameworks();
      const framework = frameworks.find(f => f.name.value.toLowerCase() === name.toLowerCase());

      if (!framework) {
        throw new Error(`Framework ${name} not found`);
      }

      return framework;
    } catch (error) {
      throw new Error(`Error getting the image for the framework ${name} - ${error}`);
    }
  }
}
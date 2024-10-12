import { Framework } from "@domain/frameworks/entities/Framework";
import type { FrameworksRepository } from "@domain/frameworks/repository/FrameworksRepository";
import type { FrameworkApi, IFrameworkAPI } from "./FrameworkAPI";

export class FrameworksAPIRepository implements FrameworksRepository {

  constructor(private frameworkApi: FrameworkApi) { }

  async getFrameworks(): Promise<Framework[]> {
    const response = await this.frameworkApi.getAll();

    return response.map((data) => this._mapToDomain(data));
  }

  _mapToDomain(data: IFrameworkAPI): Framework {
    return Framework.create({
      id: data.id,
      name: data.name,
      description: data.description,
      image: data.image,
      popularity: data.stars,
    });
  }
}
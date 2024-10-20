import { Framework } from "@domain/frameworks/entities/Framework";
import type { FrameworksRepository } from "@domain/frameworks/repository/FrameworksRepository";

import type { FrameworkApi, IFrameworkAPI } from "./FrameworkAPI";
import type { ImageAPI, ImageApi } from "./ImageAPI";

export class FrameworksAPIRepository implements FrameworksRepository {

  constructor(
    private frameworkApi: FrameworkApi,
    private imageApi: ImageApi,
  ) { }

  async getFrameworks(): Promise<Framework[]> {
    const response = await this.frameworkApi.getAll();
    const images = await this.imageApi.getAll();

    return response.map((data) => {
      const image = images.find((image) => image.filename === data.image);

      return this._mapToDomain(data, image);
    });
  }

  _mapToDomain(data: IFrameworkAPI, image?: ImageAPI): Framework {
    return Framework.create({
      id: data.id,
      name: data.name,
      description: data.description,
      image: image?.url,
      popularity: data.stars,
      page: data.page,
    });
  }
}
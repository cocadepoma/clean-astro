import axios, { type Axios } from "axios";

import { Framework } from "@domain/frameworks/entities/Framework";
import type { FrameworksRepository } from "@domain/frameworks/repository/FrameworksRepository";
import type { FrameworkAPI } from "./FrameworkAPI";

export class FrameworksAPIRepository implements FrameworksRepository {
  private api: Axios;

  constructor() {
    this.api = axios.create({
      baseURL: import.meta.env.API_URL,
    });
  }

  async getFrameworks(): Promise<Framework[]> {
    const response = await this.api.get<FrameworkAPI[]>("/frameworks");

    return response.data.map((data) => this._mapToDomain(data));
  }

  _mapToDomain(data: FrameworkAPI): Framework {
    return Framework.create({
      id: data.id,
      name: data.name,
      description: data.description,
      image: data.image,
      popularity: data.stars,
    });
  }
}
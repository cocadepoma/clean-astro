import type { Axios } from "axios";

export interface IFrameworkAPI {
  id: string;
  name: string;
  image: string;
  description: string;
  stars: number;
}

export class FrameworkApi {
  private api: Axios;
  private cache: IFrameworkAPI[] = [];

  constructor(api: Axios) {
    this.api = api;
  }

  async getAll(): Promise<IFrameworkAPI[]> {
    return this.getFrameworks();
  }

  private async getFrameworks(): Promise<IFrameworkAPI[]> {
    if (this.cache.length === 0) {
      const response = await this.api.get<IFrameworkAPI[]>("/frameworks");
      this.cache = response.data;

      return response.data;
    } else {
      return this.cache;
    }
  }
}
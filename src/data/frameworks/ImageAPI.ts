import type { Axios } from "axios";

export interface ImageAPI {
  id: string;
  filename: string;
  url: string;
}

export class ImageApi {
  private api: Axios;
  private cache: ImageAPI[] = [];

  constructor(api: Axios) {
    this.api = api;
  }

  async getAll(): Promise<ImageAPI[]> {
    return this.getImages();
  }

  private async getImages(): Promise<ImageAPI[]> {
    if (this.cache.length === 0) {
      const response = await this.api.get<ImageAPI[]>("/images");
      this.cache = response.data;

      return response.data;
    } else {
      return this.cache;
    }
  }
}
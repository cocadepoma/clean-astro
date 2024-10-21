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
      // TODO: Uncomment the following lines to fetch data from an API
      // const response = await this.api.get<ImageAPI[]>("/images");
      // this.cache = response.data;

      // return response.data;

      this.cache = images;
      return this.cache;
    } else {
      return this.cache;
    }
  }
}

const images = [
  {
    "id": "1",
    "filename": "react.png",
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
  },
  {
    "id": "2",
    "filename": "solid.png",
    "url": "https://www.solidjs.com/img/logo/without-wordmark/logo.png"
  },
  {
    "id": "3",
    "filename": "astro.png",
    "url": "https://astro.build/assets/press/astro-icon-light-gradient.png"
  },
  {
    "id": "4",
    "filename": "svelte.png",
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/1200px-Svelte_Logo.svg.png"
  },
  {
    "id": "5",
    "filename": "vue.png",
    "url": "https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png"
  },
  {
    "id": "6",
    "filename": "angular.png",
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png"
  },
  {
    "id": "7",
    "filename": "ember.png",
    "url": "https://emberjs.com/images/brand/ember-tomster-lockup-4c.svg"
  },
  {
    "id": "8",
    "filename": "backbone.png",
    "url": "https://lh5.googleusercontent.com/proxy/OHJkO9--W5k32NfojBIktnJbQ0H0izVH9dVTK04DmVc6PQWragjBwlPXNzJudzXn417DWeTVqnQ3_xjv"
  },
  {
    "id": "9",
    "filename": "aurelia.png",
    "url": "https://aurelia.io/styles/images/logo.svg"
  },
  {
    "id": "10",
    "filename": "mithril.png",
    "url": "https://seeklogo.com/images/M/mithril-logo-350BC226FB-seeklogo.com.png"
  }
];
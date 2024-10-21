import type { Axios } from "axios";

export interface IFrameworkAPI {
  id: string;
  name: string;
  image: string;
  description: string;
  stars: number;
  page: string;
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
      // TODO: Uncomment the following lines to fetch data from an API
      // const response = await this.api.get<IFrameworkAPI[]>("/frameworks");
      // this.cache = response.data;

      // return response.data;

      this.cache = frameworks;
      return this.cache;
    } else {
      return this.cache;
    }
  }
}

const frameworks = [
  {
    "id": "1",
    "name": "React",
    "image": "react.png",
    "description": "A popular JavaScript library for building user interfaces, particularly single-page applications, using a component-based architecture with a virtual DOM for efficient updates",
    "stars": 221429,
    "page": "https://reactjs.org/"
  },
  {
    "id": "2",
    "name": "Solid",
    "image": "solid.png",
    "description": "A fast, reactive JavaScript library focused on fine-grained reactivity and compiling away the virtual DOM, offering excellent performance for highly interactive UIs",
    "stars": 37231,
    "page": "https://www.solidjs.com/"
  },
  {
    "id": "3",
    "name": "Astro",
    "image": "astro.png",
    "description": "A modern framework for building fast websites, prioritizing content-first rendering and using islands architecture to load only the necessary JavaScript for each component",
    "stars": 35321,
    "page": "https://astro.build/"
  },
  {
    "id": "4",
    "name": "Svelte",
    "image": "svelte.png",
    "description": "A compiler that transforms components into efficient imperative code, eliminating the virtual DOM and directly updating the DOM, enabling smaller and faster applications",
    "stars": 75445,
    "page": "https://svelte.dev/"
  },
  {
    "id": "5",
    "name": "Vue",
    "image": "vue.png",
    "description": "A progressive JavaScript framework for building UIs, featuring an approachable core library and optional libraries for advanced features, using a reactive and component-based approach",
    "stars": 212671,
    "page": "https://vuejs.org/"
  },
  {
    "id": "6",
    "name": "Angular",
    "image": "angular.png",
    "description": "A full-fledged front-end framework from Google, offering two-way data binding, dependency injection, and a modular architecture for building large-scale applications",
    "stars": 93861,
    "page": "https://angular.io/"
  },
  {
    "id": "7",
    "name": "Ember",
    "image": "ember.png",
    "description": "A robust front-end framework with convention-over-configuration, offering an opinionated structure, data layer, and a router for building scalable, ambitious web applications",
    "stars": 23234,
    "page": "https://emberjs.com/"
  },
  {
    "id": "8",
    "name": "Backbone",
    "image": "backbone.png",
    "description": "A minimalistic JavaScript framework that provides structure to web applications with models, views, and events, focusing on simplicity and flexibility",
    "stars": 28678,
    "page": "https://backbonejs.org/"
  },
  {
    "id": "9",
    "name": "Aurelia",
    "image": "aurelia.png",
    "description": "A modern front-end framework focused on clean architecture, data-binding, and a highly modular design, promoting extensibility and simplicity in building complex applications",
    "stars": 14540,
    "page": "https://aurelia.io/"
  },
  {
    "id": "10",
    "name": "Mithril",
    "image": "mithril.png",
    "description": "A lightweight JavaScript framework for building client-side applications, known for its small size, fast rendering, and simple API, with built-in routing and state management",
    "stars": 14121,
    "page": "https://mithril.js.org/"
  },
  {
    "id": "11",
    "name": "Fake Framework",
    "image": "fake.png",
    "description": "A fake framework for testing purposes without image",
    "stars": 0,
    "page": "https://fakeframework.com/"
  }
];
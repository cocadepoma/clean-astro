import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as createAstro } from './astro/server_DinCn3nI.mjs';
import axios from 'axios';
import { a as FrameworkSort, F as FrameworkOrder } from './FrameworksRepository_C357C-bT.mjs';

class GetFrameworksUseCase {
  constructor(repository) {
    this.repository = repository;
  }
  async execute({ limit, order = FrameworkOrder.DESC, sort = FrameworkSort.POPULARITY }) {
    try {
      const frameworks = await this.repository.getFrameworks();
      const sortedFrameworks = frameworks.sort((a, b) => {
        if (sort === FrameworkSort.NAME) {
          return order === FrameworkOrder.ASC ? a.name.value.localeCompare(b.name.value) : b.name.value.localeCompare(a.name.value);
        } else if (sort === FrameworkSort.POPULARITY) {
          return order === FrameworkOrder.ASC ? a.popularity.value - b.popularity.value : b.popularity.value - a.popularity.value;
        } else {
          return 0;
        }
      });
      return sortedFrameworks.slice(0, limit);
    } catch (error) {
      throw new Error(`Error getting frameworks ${error}`);
    }
  }
}

class GetFrameworkByNameUseCase {
  constructor(repository) {
    this.repository = repository;
  }
  async execute(name) {
    try {
      const frameworks = await this.repository.getFrameworks();
      const framework = frameworks.find((f) => f.name.value.toLowerCase() === name.toLowerCase());
      if (!framework) {
        throw new Error(`Framework ${name} not found`);
      }
      return framework;
    } catch (error) {
      throw new Error(`Error getting the image for the framework ${name} - ${error}`);
    }
  }
}

class ValueObject {
  constructor(props) {
    this.props = props;
    const baseProps = {
      ...props
    };
    this.props = baseProps;
  }
  equals(vo) {
    if (vo === null || vo === void 0) {
      return false;
    }
    if (vo.props === void 0) {
      return false;
    }
    return JSON.stringify(this.props) === JSON.stringify(vo.props);
  }
}

class Id extends ValueObject {
  constructor(props) {
    super(props);
  }
  static create() {
    return new Id({ value: this.generateRandomId() });
  }
  static createFrom(id) {
    return new Id({ value: id });
  }
  get value() {
    return this.props.value;
  }
  static generateRandomId() {
    return Math.random().toString(36).substring(2);
  }
}

class ImageSrc extends ValueObject {
  constructor(props) {
    super(props);
  }
  static create(image) {
    if (!image || image?.length === 0 || !this.isValidUrl(image)) {
      return new ImageSrc({ value: "https://png.pngtree.com/png-vector/20190820/ourmid/pngtree-no-image-vector-illustration-isolated-png-image_1694547.jpg" });
    } else {
      return new ImageSrc({ value: this.format(image) });
    }
  }
  get value() {
    return this.props.value;
  }
  static format(image) {
    return image.trim();
  }
  static isValidUrl(url) {
    try {
      new URL(url);
      return true;
    } catch (error) {
      return false;
    }
  }
}

class Name extends ValueObject {
  constructor(props) {
    super(props);
  }
  static create(name) {
    if (name.length === 0) {
      throw new Error("name is required");
    } else {
      return new Name({ value: this.format(name) });
    }
  }
  get value() {
    return this.props.value;
  }
  static format(name) {
    return name.trim();
  }
}

class Popularity extends ValueObject {
  constructor(props) {
    super(props);
  }
  static create(popularity) {
    if (popularity < 0) {
      throw new Error("popularity must be a positive number");
    } else {
      return new Popularity({ value: popularity });
    }
  }
  get value() {
    return this.props.value;
  }
}

class UrlPage extends ValueObject {
  constructor(props) {
    super(props);
  }
  static create(url) {
    if (url.length === 0) {
      throw new Error("url is required");
    } else if (!this.isValidUrl(url)) {
      throw new Error("url is not a valid URL");
    } else {
      return new UrlPage({ value: this.format(url) });
    }
  }
  static format(url) {
    return url.trim();
  }
  static isValidUrl(url) {
    try {
      new URL(url);
      return true;
    } catch (error) {
      return false;
    }
  }
  get value() {
    return this.props.value;
  }
}

class Framework {
  id;
  name;
  description;
  image;
  popularity;
  page;
  constructor(props) {
    this.id = props.id;
    this.name = props.name;
    this.description = props.description;
    this.image = props.image;
    this.popularity = props.popularity;
    this.page = props.page;
  }
  static create(props) {
    try {
      const id = props.id ? Id.createFrom(props.id) : Id.create();
      const name = Name.create(props.name);
      const description = Name.create(props.description);
      const image = ImageSrc.create(props.image);
      const popularity = Popularity.create(props.popularity);
      const page = UrlPage.create(props.page);
      return new Framework({ id, name, description, image, popularity, page });
    } catch (error) {
      throw Error(`Error creating Framework entity: ${error}`);
    }
  }
  update(props) {
    try {
      const id = props.id ? Id.createFrom(props.id) : this.id;
      const name = props.name ? Name.create(props.name) : this.name;
      const description = props.description ? Name.create(props.description) : this.description;
      const image = props.image ? ImageSrc.create(props.image) : this.image;
      const popularity = props.popularity ? Popularity.create(props.popularity) : this.popularity;
      const page = props.page ? UrlPage.create(props.page) : this.page;
      return new Framework({ id, name, description, image, popularity, page });
    } catch (error) {
      throw Error(`Error updating Framework entity: ${error}`);
    }
  }
  toJSON() {
    return {
      id: this.id.value,
      name: this.name.value,
      description: this.description.value,
      image: this.image.value,
      popularity: this.popularity.value,
      page: this.page.value
    };
  }
}

class FrameworksAPIRepository {
  constructor(frameworkApi, imageApi) {
    this.frameworkApi = frameworkApi;
    this.imageApi = imageApi;
  }
  async getFrameworks() {
    const response = await this.frameworkApi.getAll();
    const images = await this.imageApi.getAll();
    return response.map((data) => {
      const image = images.find((image2) => image2.filename === data.image);
      return this._mapToDomain(data, image);
    });
  }
  _mapToDomain(data, image) {
    return Framework.create({
      id: data.id,
      name: data.name,
      description: data.description,
      image: image?.url,
      popularity: data.stars,
      page: data.page
    });
  }
}

class FrameworkApi {
  api;
  cache = [];
  constructor(api) {
    this.api = api;
  }
  async getAll() {
    return this.getFrameworks();
  }
  async getFrameworks() {
    if (this.cache.length === 0) {
      const response = await this.api.get("/frameworks");
      this.cache = response.data;
      return response.data;
    } else {
      return this.cache;
    }
  }
}

class ImageApi {
  api;
  cache = [];
  constructor(api) {
    this.api = api;
  }
  async getAll() {
    return this.getImages();
  }
  async getImages() {
    if (this.cache.length === 0) {
      const response = await this.api.get("/images");
      this.cache = response.data;
      return response.data;
    } else {
      return this.cache;
    }
  }
}

class CompositionRoot {
  constructor() {
  }
  static instance;
  frameworkApi = new FrameworkApi(
    axios.create({
      baseURL: "http://localhost:3000"
    })
  );
  imageApi = new ImageApi(
    axios.create({
      baseURL: "http://localhost:3000"
    })
  );
  frameworksRepository = new FrameworksAPIRepository(this.frameworkApi, this.imageApi);
  static getInstance() {
    if (!CompositionRoot.instance) {
      CompositionRoot.instance = new CompositionRoot();
    }
    return CompositionRoot.instance;
  }
  provideGetFrameworksUseCase() {
    return new GetFrameworksUseCase(this.frameworksRepository);
  }
  provideGetFrameworkByNameUseCase() {
    return new GetFrameworkByNameUseCase(this.frameworksRepository);
  }
}

const $$Astro = createAstro();
const $$AstroIsland = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AstroIsland;
  const getFramworks = CompositionRoot.getInstance().provideGetFrameworksUseCase();
  const getFrameworkByName = CompositionRoot.getInstance().provideGetFrameworkByNameUseCase();
  const frameworks = await getFramworks.execute({});
  const astroFramework = await getFrameworkByName.execute("Astro");
  return renderTemplate`${maybeRenderHead()}<div class="island__container"> <div class="island__header"> <img${addAttribute(astroFramework.image.value, "src")} alt="Astro"> <div class="params"> <p><span>Order</span>: Default</p> <p><span>Sort</span>: Default</p> <p><span>Limit</span>: None</p> </div> </div> <div class="island__frameworks custom-scroll"> ${frameworks.map((framework) => renderTemplate`<a${addAttribute(framework.page.value, "href")} target="_blank"> <section class="island__framework"> <div class="island__image-container"> <img class="image"${addAttribute(framework.image.value, "src")}${addAttribute(framework.name.value, "alt")}> <h4 class="title">${framework.name.value}</h4> </div> <div class="island__info-container"> <p> <span>Description:</span> ${framework.description.value} </p> <p> <span>Popularity:</span> <span class="popularity">${framework.popularity.value}</span>⭑
</p> </div> </section> </a>`)} </div> </div>`;
}, "/Users/paco/Desktop/clean-astro/src/pages/astro/AstroIsland.astro", void 0);

const $$file = "/Users/paco/Desktop/clean-astro/src/pages/astro/AstroIsland.astro";
const $$url = "/astro/AstroIsland";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$AstroIsland,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$AstroIsland as $, _page as _ };

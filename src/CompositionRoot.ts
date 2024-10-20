import axios from "axios";

import { GetFrameworksUseCase } from "@domain/frameworks/use_cases/GetFrameworksUseCase";
import { GetFrameworkByNameUseCase } from "@domain/frameworks/use_cases/GetFrameworkByNameUseCase";

import { FrameworksAPIRepository } from "@data/frameworks/FrameworksAPIRepository";
import { FrameworkApi } from "@data/frameworks/FrameworkAPI";
import { ImageApi } from "@data/frameworks/ImageAPI";

export class CompositionRoot {
  constructor() { }

  private static instance: CompositionRoot;
  private frameworkApi = new FrameworkApi(
    axios.create({
      baseURL: import.meta.env.PUBLIC_API_URL,
    })
  );
  private imageApi = new ImageApi(
    axios.create({
      baseURL: import.meta.env.PUBLIC_API_URL,
    })
  );

  private frameworksRepository = new FrameworksAPIRepository(this.frameworkApi, this.imageApi);

  public static getInstance(): CompositionRoot {
    if (!CompositionRoot.instance) {
      CompositionRoot.instance = new CompositionRoot();
    }

    return CompositionRoot.instance;
  }

  public provideGetFrameworksUseCase() {
    return new GetFrameworksUseCase(this.frameworksRepository);
  }

  public provideGetFrameworkByNameUseCase() {
    return new GetFrameworkByNameUseCase(this.frameworksRepository);
  }
}
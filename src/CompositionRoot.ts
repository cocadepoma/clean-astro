import axios from "axios";
import { FrameworkApi } from "@data/frameworks/FrameworkAPI";
import { FrameworksAPIRepository } from "@data/frameworks/FrameworksAPIRepository";
import { GetFrameworksUseCase } from "@domain/frameworks/use_cases/GetFrameworksUseCase";

export class CompositionRoot {
  constructor() { }

  private static instance: CompositionRoot;
  private frameworkApi = new FrameworkApi(
    axios.create({
      baseURL: import.meta.env.PUBLIC_API_URL,
    })
  );

  private frameworksRepository = new FrameworksAPIRepository(this.frameworkApi);

  public static getInstance(): CompositionRoot {
    if (!CompositionRoot.instance) {
      CompositionRoot.instance = new CompositionRoot();
    }

    return CompositionRoot.instance;
  }

  public provideGetFrameworksUseCase() {
    return new GetFrameworksUseCase(this.frameworksRepository);
  }
}
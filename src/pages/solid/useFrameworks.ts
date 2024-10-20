import { createEffect, createSignal } from "solid-js"

import type { Framework } from "@domain/frameworks/entities/Framework";
import type { GetFrameworkByNameUseCase } from "@domain/frameworks/use_cases/GetFrameworkByNameUseCase";
import type { GetFrameworksUseCase } from "@domain/frameworks/use_cases/GetFrameworksUseCase";
import { FrameworkOrder, FrameworkSort } from "@domain/frameworks/repository/FrameworksRepository";

export const useFrameworks = (
  getFrameworksUseCase: GetFrameworksUseCase,
  getFrameworkByNameUseCase: GetFrameworkByNameUseCase,
) => {
  const [frameworks, setFrameworks] = createSignal<Framework[]>([]);
  const [framework, setFramework] = createSignal<Framework | null>(null);
  const [loading, setLoading] = createSignal(false);

  createEffect(() => {
    fetchFrameworks();
    fetchFrameworkByName();
  });

  const fetchFrameworks = async () => {
    try {
      setLoading(true);
      const frameworks = await getFrameworksUseCase.execute({
        order: FrameworkOrder.DESC,
        sort: FrameworkSort.NAME,
        limit: 3,
      });
      setFrameworks(frameworks);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  const fetchFrameworkByName = async () => {
    try {
      setLoading(true);
      const framework = await getFrameworkByNameUseCase.execute("Solid");
      setFramework(framework);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return {
    framework,
    frameworks,
    loading
  };
}
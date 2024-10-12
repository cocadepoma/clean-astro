import type { Framework } from "@domain/frameworks/entities/Framework";
import type { GetFrameworksUseCase } from "@domain/frameworks/use_cases/GetFrameworksUseCase";
import { createEffect, createSignal } from "solid-js"

export const useFrameworks = (getFrameworksUseCase: GetFrameworksUseCase) => {
  const [frameworks, setFrameworks] = createSignal<Framework[]>([]);
  const [loading, setLoading] = createSignal(false);

  createEffect(() => {
    fetchFrameworks();
  });

  const fetchFrameworks = async () => {
    try {
      setLoading(true);
      const frameworks = await getFrameworksUseCase.execute();
      setFrameworks(frameworks);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return {
    frameworks,
    loading
  };
}
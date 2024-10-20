import { useEffect, useState } from "react";

import type { Framework } from "@domain/frameworks/entities/Framework";
import type { GetFrameworksUseCase } from "@domain/frameworks/use_cases/GetFrameworksUseCase";
import type { GetFrameworkByNameUseCase } from "@domain/frameworks/use_cases/GetFrameworkByNameUseCase";
import { FrameworkOrder, FrameworkSort } from "@domain/frameworks/repository/FrameworksRepository";

export const useFrameworks = (
  getFrameworksUseCase: GetFrameworksUseCase,
  getFrameworkByNameUseCase: GetFrameworkByNameUseCase,
) => {
  const [frameworks, setFrameworks] = useState<Framework[]>([]);
  const [framework, setFramework] = useState<Framework | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFrameworks();
    fetchFrameworkByName();
  }, []);

  const fetchFrameworks = async () => {
    try {
      setLoading(true);
      const frameworks = await getFrameworksUseCase.execute({
        order: FrameworkOrder.ASC,
        sort: FrameworkSort.NAME,
        limit: 6,
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
      const framework = await getFrameworkByNameUseCase.execute("React");
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
import { useEffect, useState } from "react";

import type { Framework } from "@domain/frameworks/entities/Framework";
import type { GetFrameworksUseCase } from "@domain/frameworks/use_cases/GetFrameworksUseCase";

export const useFrameworks = (getFrameworksUseCase: GetFrameworksUseCase) => {
  const [frameworks, setFrameworks] = useState<Framework[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFrameworks();
  }, []);

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
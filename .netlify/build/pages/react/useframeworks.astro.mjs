import { useState, useEffect } from 'react';
import { F as FrameworkOrder, a as FrameworkSort } from '../../chunks/FrameworksRepository_C357C-bT.mjs';
export { renderers } from '../../renderers.mjs';

const useFrameworks = (getFrameworksUseCase, getFrameworkByNameUseCase) => {
  const [frameworks, setFrameworks] = useState([]);
  const [framework, setFramework] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchFrameworks();
    fetchFrameworkByName();
  }, []);
  const fetchFrameworks = async () => {
    try {
      setLoading(true);
      const frameworks2 = await getFrameworksUseCase.execute({
        order: FrameworkOrder.ASC,
        sort: FrameworkSort.NAME,
        limit: 6
      });
      setFrameworks(frameworks2);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  const fetchFrameworkByName = async () => {
    try {
      setLoading(true);
      const framework2 = await getFrameworkByNameUseCase.execute("React");
      setFramework(framework2);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  return {
    framework,
    frameworks,
    loading
  };
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  useFrameworks
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

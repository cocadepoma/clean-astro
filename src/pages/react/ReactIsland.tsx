/** @jsxImportSource react */

import { useMemo } from "react";
import { CompositionRoot } from "@CompositionRoot";

import { useFrameworks } from "./useFrameworks";

export const ReactIsland = () => {
  const getFrameworksUseCase = useMemo(() => CompositionRoot.getInstance().provideGetFrameworksUseCase(), []);
  const { frameworks, loading } = useFrameworks(getFrameworksUseCase);

  return (
    <div className="island__container">
      <h3 className="header">ReactIsland</h3>
      {loading && <div>Loading Frameworks...</div>}

      {!loading && frameworks.map((framework) => (
        <section className="island__framework" key={framework.id.value}>
          <h4 className="title">{framework.name.value}</h4>
          <p className="description">{framework.description.value}</p>
          <img className="image" src={framework.image.value} alt={framework.name.value} />
          <p className="popularity">Popularity: {framework.popularity.value}</p>
        </section>
      ))}
    </div>
  )
}

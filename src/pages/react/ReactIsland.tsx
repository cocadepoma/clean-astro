/** @jsxImportSource react */

import { useMemo } from "react";
import { CompositionRoot } from "@CompositionRoot";

import { useFrameworks } from "./useFrameworks";

export const ReactIsland = () => {
  const getFrameworksUseCase = useMemo(() => CompositionRoot.getInstance().provideGetFrameworksUseCase(), []);
  const { frameworks, loading } = useFrameworks(getFrameworksUseCase);

  return (
    <div className="island__container react">
      <h3 className="header">React Island</h3>

      <div className="island__frameworks custom-scroll">
        {loading && <div>Loading Frameworks...</div>}

        {!loading && frameworks.map((framework) => (
          <a key={framework.id.value} href={framework.page.value} target="_blank">

            <section className="island__framework">
              <div className="island__image-container">
                <img
                  className="image"
                  src={framework.image.value}
                  alt={framework.name.value}
                />
                <h4 className="title">{framework.name.value}</h4>
              </div>
              <div className="island__info-container">
                <p>
                  <span>Description:</span>
                  {framework.description.value}
                </p>
                <p>
                  <span>Popularity:</span>
                  <span className="popularity">
                    {framework.popularity.value}
                  </span>
                  ⭑
                </p>
              </div>
            </section>
          </a>
        ))}
      </div>
    </div>
  )
}

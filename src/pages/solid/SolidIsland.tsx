import { For, Show } from "solid-js"
import { CompositionRoot } from "@CompositionRoot";

import { useFrameworks } from "./useFrameworks";

export function SolidIsland() {
  const getFrameworksUseCase = CompositionRoot.getInstance().provideGetFrameworksUseCase();
  const { frameworks, loading } = useFrameworks(getFrameworksUseCase);

  return (
    <div class="island__container solid">
      <h3 class="header">Solid Island</h3>

      <div class="island__frameworks custom-scroll">
        <Show when={loading()}>Loading Frameworks...</Show>

        <Show when={!loading()}>
          <For each={frameworks()}>
            {(framework) => (
              <a href={framework.page.value} target="_blank">
                <section class="island__framework">
                  <div class="island__image-container">
                    <img
                      class="image"
                      src={framework.image.value}
                      alt={framework.name.value}
                    />
                    <h4 class="title">{framework.name.value}</h4>
                  </div>
                  <div class="island__info-container">
                    <p>
                      <span>Description:</span>
                      {framework.description.value}
                    </p>
                    <p>
                      <span>Popularity:</span>
                      <span class="popularity">
                        {framework.popularity.value}
                      </span>
                      ⭑
                    </p>
                  </div>
                </section>
              </a>
            )}
          </For>
        </Show>
      </div>
    </div>
  )
}
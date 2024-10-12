import { For, Show } from "solid-js"
import { CompositionRoot } from "@CompositionRoot";

import { useFrameworks } from "./useFrameworks";

export function SolidIsland() {
  const getFrameworksUseCase = CompositionRoot.getInstance().provideGetFrameworksUseCase();
  const { frameworks, loading } = useFrameworks(getFrameworksUseCase);

  return (
    <div class="island__container">
      <h3 class="header">AstroIsland</h3>
      <Show when={loading()}>Loading Frameworks...</Show>

      <Show when={!loading()}>
        <For each={frameworks()}>
          {(framework) => (
            <section class="island__framework">
              <h4 class="title">{framework.name.value}</h4>
              <p class="description">{framework.description.value}</p>
              <img class="image" src={framework.image.value} alt={framework.name.value} />
              <p class="popularity">Popularity: {framework.popularity.value}</p>
            </section>
          )}
        </For>
      </Show>

    </div>
  )
}
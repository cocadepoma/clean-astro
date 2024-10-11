import { createSignal } from "solid-js"

export function SolidIsland() {
  const [count, setCount] = createSignal(0);

  return (
    <div>
      <h3>SolidIsland</h3>
      <div>{count()}</div>
      <button onClick={() => setCount(count() + 1)}>Increment</button>
    </div>
  )
}
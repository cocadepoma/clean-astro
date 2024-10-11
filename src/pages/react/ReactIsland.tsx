/** @jsxImportSource react */

import React, { useState } from "react"

export const ReactIsland = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3>ReactIsland</h3>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

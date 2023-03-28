import { useState } from "react"
import List from "./List"

function UseDeferred() {
  console.count("renderizou useDeferred")
  const [text, setText] = useState("")
  // const deferredText = useDeferredValue(text)

  return (
    <>
      <h2>useDeferred</h2>
      <hr />
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <br />
      <List text={text} />
      <hr />
    </>
  )
}

export default UseDeferred

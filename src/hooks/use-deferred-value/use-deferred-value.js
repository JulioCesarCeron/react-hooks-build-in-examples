import { useState } from "react"
import List from "./List"

function UseDeferred() {
  const [text, setText] = useState("")
  // const deferredText = useDeferredValue(text)

  return (
    <>
      <hr />
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <br />
      <List text={text} />
      <hr />
    </>
  )
}

export default UseDeferred

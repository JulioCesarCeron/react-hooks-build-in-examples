import { useDeferredValue, useState } from "react"
import List from "./List"

function UseDeferred() {
  const [text, setText] = useState("")
  const deferredText = useDeferredValue(text)

  const isLoading = deferredText !== text

  return (
    <>
      <h2>useDeferred</h2>
      <hr />
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <br />
      {isLoading && <span>loading</span>}
      <List text={deferredText} />
      <hr />
    </>
  )
}

export default UseDeferred

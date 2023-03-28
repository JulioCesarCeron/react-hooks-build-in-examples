import { useRef, useState } from "react"
import { dog } from "./use-ref.props"

let externalVariable = "initial"

function UseRef() {
  const [count, setCount] = useState(0)
  const ref = useRef(0)

  console.group("UseRef")
  console.count("renderizou UseRef")
  console.log("externalVariable", externalVariable)
  console.log("ref", ref)

  const onChangeRef = () => {
    if (typeof ref.current === "object") {
      ref.current = 0
    }

    ref.current += 1
    console.log("ref.current", ref)
  }

  const changeOutsideVariable = () => {
    externalVariable = "javascript brings great emotions"
    console.log("variavelExterna", externalVariable)
  }

  console.groupEnd()
  return (
    <div className="use-ref">
      <h1>useRef</h1>

      <hr />

      <article>
        <button onClick={onChangeRef}>update counter useRef</button>
        <button
          onClick={() => {
            ref.current = dog
          }}
        >
          add dog to useRef
        </button>
        <button onClick={() => changeOutsideVariable()}>
          update external variable
        </button>
        <br />
        {/* don't show ref in html like this in a real app */}
        <pre>{JSON.stringify(ref, undefined, 2)}</pre>
      </article>

      <hr />

      <article>
        <button onClick={() => setCount((prev) => prev + 1)}>
          update counter state
        </button>
        <br />
        <pre>state: {count}</pre>
      </article>

      <hr />
    </div>
  )
}

export default UseRef

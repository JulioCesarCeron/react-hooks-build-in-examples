import { useRef, useState } from "react"
import { dog } from "./use-ref.props"

// let externalVariable = "initial"

function UseRef() {
  const [count, setCount] = useState(0)
  const ref = useRef(0) // set to null inital value

  console.group("UseRef")
  console.count("renderizou UseRef")
  // console.log("externalVariable", externalVariable)
  console.log("ref", ref)
  console.groupEnd()

  const onChangeRef = () => {
    if (typeof ref.current === "object") {
      ref.current = 0
    }

    ref.current += 1
    console.log("ref.current", ref)
  }

  // const changeOutsideVariable = () => {
  //   externalVariable = "javascript brings great emotions"
  //   console.log("variavelExterna", externalVariable)
  // }

  return (
    <div className="use-ref">
      <p>1 - useRef</p>

      <hr />

      <div>
        <button onClick={onChangeRef}>update counter useRef</button>
        <button
          onClick={() => {
            ref.current = dog
          }}
        >
          add dog to useRef
        </button>
        <br />
        {/* don't show ref in html like this in a real app */}
        <pre> useRef {JSON.stringify(ref, undefined, 2)}</pre>
      </div>

      <div>
        <button onClick={() => setCount((prev) => prev + 1)}>
          update counter state
        </button>
        <br />
        <pre>state: {count}</pre>
      </div>

      {/* <div>
        <button onClick={() => changeOutsideVariable()}>
          update external variable
        </button>
        <br />
        <pre>externalVariable: {externalVariable}</pre>
      </div> */}

      <hr />
    </div>
  )
}

export default UseRef

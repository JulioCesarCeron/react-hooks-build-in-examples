import { useRef, useState } from "react"

const dog = {
  name: "zeca",
  race: "caramelo bombado",
  isFriendly: true,
}

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

  const onAddDog = () => {
    ref.current = dog
  }

  const changeOutsideVariable = () => {
    externalVariable = "javascript brings great emotions"
    console.log("variavelExterna", externalVariable)
  }

  console.groupEnd()
  return (
    <div className="App">
      <h1>useRef</h1>

      <hr />

      <article>
        <button onClick={onChangeRef}>update useRef with counter</button>{" "}
        <button onClick={onAddDog}>add dog to useRef</button>
        <br />
        <br />
        {/* don't show ref in html like this in a real app */}
        <pre>{JSON.stringify(ref, undefined, 2)}</pre>
      </article>

      <hr />

      <article>
        <button onClick={() => setCount((prev) => prev + 1)}>
          update state with counter
        </button>
        <br />
        <br />
        <pre>state: {count}</pre>
      </article>

      <hr />
      <button onClick={() => changeOutsideVariable()}>
        change external variable value
      </button>
    </div>
  )
}

export default UseRef

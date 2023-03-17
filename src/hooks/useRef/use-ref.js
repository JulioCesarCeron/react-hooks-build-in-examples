import { useRef, useState } from "react"

const dog = {
  name: "zeca",
  race: "caramelo bombado",
  isFriendly: true,
  // photo: 🦮,
}

function UseRef() {
  const [count, setCount] = useState(0)
  console.count("renderizou")
  const ref = useRef(0)

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

  return (
    <div className="App">
      <h1>useRef</h1>

      <hr />

      <article>
        <button onClick={onChangeRef}>update count</button>
        <button onClick={onAddDog}>add dog</button>
        <br />
        <br />
        <pre>{JSON.stringify(ref, undefined, 2)}</pre>
      </article>

      <hr />

      <article>
        <button onClick={() => setCount((prev) => prev + 1)}>
          update COUNTER
        </button>
        <br />
        <br />
        <pre>state: {count}</pre>
      </article>

      <hr />
    </div>
  )
}

export default UseRef

import { useState } from "react"
import UseEffect from "./hooks/useRef/use-effect"
import UseRef from "./hooks/useRef/use-ref"
import UseRef2 from "./hooks/useRef/use-ref-watch"

function App() {
  const [component, setComponent] = useState("")

  const showElement = () => {
    const data = {
      "use-ref": <UseRef />,
      "use-effect": <UseEffect />,
      "use-ref-2": <UseRef2 />,
    }

    return data[component]
  }

  return (
    <div className="App">
      <h1>hooooooks</h1>

      <ul>
        <li>
          <button onClick={() => setComponent("use-ref")}>useRef</button>
        </li>
        <li>
          <button onClick={() => setComponent("use-ref-2")}>useRef2</button>
        </li>
        <li>
          <button onClick={() => setComponent("use-effect")}>useEffect</button>
        </li>
        <li>
          <button onClick={() => setComponent("UseRef")}> 2 </button>
        </li>
        <li>
          <button onClick={() => setComponent("UseRef")}> 3 </button>
        </li>
        <li>
          <button onClick={() => setComponent("UseRef")}> 4 </button>
        </li>
      </ul>

      {showElement()}
    </div>
  )
}

export default App

import { useState } from "react"
import UseEffect from "./hooks/use-effect/use-effect"
import FowardContainer from "./hooks/useRef/forward-ref/forward-ref-container"
import UseRef from "./hooks/useRef/use-ref"
import UseRefFocus from "./hooks/useRef/use-ref-focus"
import UseRefScroll from "./hooks/useRef/use-ref-scroll"
import UseDeferred from "./hooks/use-deferred-value/use-deferred-value"

function App() {
  const [component, setComponent] = useState("")

  const showElement = () => {
    const data = {
      "use-ref": <UseRef />,
      "use-effect": <UseEffect />,
      "use-ref-scroll": <UseRefScroll />,
      "use-ref-focus": <UseRefFocus />,
      "use-ref-forward": <FowardContainer />,
      "use-deferred-value": <UseDeferred />,
    }

    return data[component]
  }

  return (
    <div className="App">
      <span className="environment-info">{process.env.NODE_ENV}</span>
      <h1>hooooooks</h1>

      <ul>
        <li>
          <button onClick={() => setComponent("use-ref")}>useRef</button>
        </li>
        <li>
          <button onClick={() => setComponent("use-ref-focus")}>
            useRefFocus
          </button>
        </li>
        <li>
          <button onClick={() => setComponent("use-ref-scroll")}>
            useRefScroll
          </button>
        </li>
        <li>
          <button onClick={() => setComponent("use-effect")}>useEffect</button>
        </li>
        <li>
          <button onClick={() => setComponent("use-ref-forward")}>
            useRef fowardRef
          </button>
        </li>
        <li>
          <button onClick={() => setComponent("use-deferred-value")}>
            useDeferredValue
          </button>
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

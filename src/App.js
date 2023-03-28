import { useState } from "react"
import FowardContainer from "./hooks/useRef/forward-ref/forward-ref-container"
import UseRef from "./hooks/useRef/use-ref"
import UseRefFocus from "./hooks/useRef/use-ref-focus"
import UseRefScroll from "./hooks/useRef/use-ref-scroll"
import UseDeferred from "./hooks/use-deferred-value/use-deferred-value"
import UseMemoComponent from "./hooks/use-memo/UseMemoComponent"
import UseCallback from "./hooks/use-callback/UseCallback"

function App() {
  const [component, setComponent] = useState("")

  const showElement = () => {
    const data = {
      "use-ref": <UseRef />,
      "use-ref-scroll": <UseRefScroll />,
      "use-ref-focus": <UseRefFocus />,
      "use-ref-forward": <FowardContainer />,
      "use-deferred-value": <UseDeferred />,
      "use-memo": <UseMemoComponent />,
      "use-callback": <UseCallback />,
    }

    return data[component]
  }

  return (
    <div className="App">
      <span className="environment-info">{process.env.NODE_ENV}</span>
      <h1>hooooooks</h1>

      <ul className="list-buttons">
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
          <button onClick={() => setComponent("use-memo")}> useMemo </button>
        </li>
        <li>
          <button onClick={() => setComponent("use-callback")}>
            useCallback
          </button>
        </li>
      </ul>

      <hr size="3" noshade="true" color="red" />

      {showElement()}
    </div>
  )
}

export default App

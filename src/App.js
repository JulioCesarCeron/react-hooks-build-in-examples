import { useState } from "react"
import routes from "./spa-routes"

function App() {
  const [component, setComponent] = useState("")

  const showElement = () => {
    return routes[component]
  }

  const isActive = (styleName) =>
    component === styleName ? "active-primary" : ""

  return (
    <div>
      <span className="environment-info">{process.env.NODE_ENV}</span>
      <h1>hooooooks</h1>

      <ul className="list-buttons">
        <li>
          <button
            className={isActive("use-ref-app")}
            onClick={() => setComponent("use-ref-app")}
          >
            useRef
          </button>
        </li>
        <li>
          <button
            className={isActive("use-deferred-value")}
            onClick={() => setComponent("use-deferred-value")}
          >
            useDeferred
          </button>
        </li>
        <li>
          <button
            className={isActive("use-memo")}
            onClick={() => setComponent("use-memo")}
          >
            useMemo
          </button>
        </li>
        <li>
          <button
            className={isActive("use-callback")}
            onClick={() => setComponent("use-callback")}
          >
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

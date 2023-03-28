import { useState } from "react"
import routes from "../../spa-routes"

const UseRefApp = () => {
  const [component, setComponent] = useState("")

  const showElement = () => {
    return routes[component]
  }

  const isActive = (styleName) =>
    component === styleName ? "active-secondary" : ""

  return (
    <div className="use-ref">
      <h2>useRef</h2>

      <ul className="list-buttons">
        <li>
          <button
            className={isActive("use-ref")}
            onClick={() => setComponent("use-ref")}
          >
            1 - useRef
          </button>
        </li>
        <li>
          <button
            className={isActive("use-ref-focus")}
            onClick={() => setComponent("use-ref-focus")}
          >
            2 - useRef Focus
          </button>
        </li>
        <li>
          <button
            className={isActive("use-ref-scroll")}
            onClick={() => setComponent("use-ref-scroll")}
          >
            3 - useRef Scroll
          </button>
        </li>
        <li>
          <button
            className={isActive("use-ref-forward")}
            onClick={() => setComponent("use-ref-forward")}
          >
            4 - forwardRef
          </button>
        </li>
      </ul>

      {showElement()}
    </div>
  )
}

export default UseRefApp

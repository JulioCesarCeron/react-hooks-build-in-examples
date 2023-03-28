import { useState } from "react"
import { createTodos } from "../../util/todos"
import TodoList from "./TodoList"

const todos = createTodos()

const UseMemoComponent = () => {
  console.count("renderizou useMemo")
  const [tab, setTab] = useState("all")
  const [isDark, setIsDark] = useState(false)

  const isActive = (styleName) => (tab === styleName ? "active-tertiary" : "")

  return (
    <>
      <h2>useMemo</h2>
      <hr />
      <div className="list-buttons">
        <button className={isActive("all")} onClick={() => setTab("all")}>
          All
        </button>
        <button className={isActive("active")} onClick={() => setTab("active")}>
          Active
        </button>
        <button
          className={isActive("completed")}
          onClick={() => setTab("completed")}
        >
          Completed
        </button>
      </div>
      <br />
      <label>
        <input
          type="checkbox"
          checked={isDark}
          onChange={(e) => setIsDark(e.target.checked)}
        />
        Dark mode
      </label>
      <TodoList todos={todos} tab={tab} theme={isDark ? "dark" : "light"} />
      <hr />
    </>
  )
}

export default UseMemoComponent

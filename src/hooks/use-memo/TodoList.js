import { useMemo } from "react"
import { filterTodos } from "../../util/todos"

const TodoList = ({ todos, theme, tab }) => {
  console.count("renderizou TodoList")

  const visibleTodos = useMemo(() => filterTodos(todos, tab), [tab, todos])

  return (
    <div className={theme}>
      <ul>
        {visibleTodos.map((todo) => (
          <li key={todo.id}>
            {todo.completed ? <s>{todo.text}</s> : todo.text}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList

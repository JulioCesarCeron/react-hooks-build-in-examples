import { filterTodos } from "../../util/todos"

const TodoList = ({ todos, theme, tab }) => {
  console.count("renderizou TodoList")

  const visibleTodos = filterTodos(todos, tab)

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

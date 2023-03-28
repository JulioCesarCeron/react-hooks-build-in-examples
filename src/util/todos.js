export function createTodos() {
  const todos = []
  for (let i = 0; i < 5000; i++) {
    todos.push({
      id: i,
      text: "Todo " + (i + 1),
      completed: Math.random() > 0.5,
    })
  }
  return todos
}

export function filterTodos(todos, tab) {
  console.log("Filtering " + todos.length + ' todos for "' + tab + '" tab.')

  return todos.filter((todo) => {
    if (tab === "active") {
      return !todo.completed
    }

    if (tab === "completed") {
      return todo.completed
    }

    return true
  })
}

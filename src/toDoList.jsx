import { TodoItem } from "./toDoItem"

export function ToDoList({todos, toggleTodo, deleteTodo}){
  return (
    <ul className="list">
      {todos.length === 0 && "No Todos"}
      {todos.map(todo => {
        return (
          <TodoItem
            {...todo}
            key={todo.id} 
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        )
      })}
    </ul>
  )
}
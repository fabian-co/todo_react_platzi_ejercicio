import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext()


function TodoProvider( {children} ) {
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
      } = useLocalStorage("todo_v1", [])
      
      const completedTodos = todos.filter( todo => !!todo.completed).length
      const totalToods = todos.length
      
      const [searchValue, setSearchValue] = React.useState("")
    
      const searchedTodos = todos.filter(
        (todo) => {
          const sinTilde = (text) => {return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');}
          const textTodo = sinTilde(todo.text.toLocaleLowerCase())
          const textSearch = sinTilde(searchValue.toLocaleLowerCase())
         return textTodo.includes(textSearch)
        }
      )
    
      const completeTodo = (text) => {
        const NewTodos = [...todos]
        const todoIndex = NewTodos.findIndex(
          (todo) => todo.text === text
        )
        NewTodos[todoIndex].completed = true
        saveTodos(NewTodos)
      }
    
      const unCompleteTodo = (text) => {
        const NewTodos = [...todos]
        const todoIndex = NewTodos.findIndex(
          (todo) => todo.text === text
        )
        NewTodos[todoIndex].completed = false
        saveTodos(NewTodos)
      }
    
      const deleteTodo = (text) => {
        const NewTodos = [...todos]
        const todoIndex = NewTodos.findIndex(
          (todo) => todo.text === text
        )
        NewTodos.splice(todoIndex, 1)
        saveTodos(NewTodos)
      }
    return(
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            totalToods,
            searchValue,
            setSearchValue,
            searchedTodos, 
            completeTodo,
            unCompleteTodo,
            deleteTodo,
        }}>
            {children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider }
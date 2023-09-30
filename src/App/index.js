import React from 'react';
import { AppUI } from "./AppUI"
import { useLocalStorage } from './useLocalStorage';

// const defaultTodos = [
//   {text: "Cortar Tomates", completed: true},
//   {text: "Hacer la cama", completed: false},
//   {text: "Desayunar", completed: true},
//   {text: "Trabajar", completed: false},
//   {text: "Comer", completed: false},
//   {text: "Cenar", completed: false},
//   {text: "Caminar", completed: false},
//   {text: "Estudiar", completed: false},
//   {text: "Repasár", completed: false},
// ]

function App() {  
  
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
    <AppUI
      loading={loading}
      error={error}
      completedTodos={completedTodos}
      totalToods={totalToods}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      unCompleteTodo={unCompleteTodo}
      deleteTodo={deleteTodo}
    />
  )  
}

export default App;

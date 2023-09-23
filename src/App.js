import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import { NewTodo }  from './NewTodo';
import React from 'react';
import artImg from "./img/Task.svg"

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

function useLocalStorage(itemName, initialValue) {
  
  const localStorageItem = localStorage.getItem(itemName)

  let parsedItem

  if(!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue))
    parsedItem = initialValue
  } else {
    parsedItem = JSON.parse(localStorageItem)
  }

  const [item, setItem] = React.useState(parsedItem)
  
  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem)  
  }

  return [item, saveItem]
}

function App() {  
  
  const [todos, saveTodos] = useLocalStorage("todo_v1", [])
  
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

  return (
    <>
      <main className='todo-app'>
        <div className='tarea'>
          <div className='box-nueva-tarea'>
            <div className='crear-tarea-nueva'>
              <h1>Nueva Tarea</h1>
              <h4>Nombre de la tarea</h4>
              <NewTodo/>
              <CreateTodoButton/> 
            </div>
            <div className='image-task-man'>
              <img src={artImg} alt="Task-man"/>
            </div>
          </div>                     
          <div className='box-mis-tareas'>
            <h1 className='titulo-mis-tareas'>Mis Tareas</h1>
            <TodoCounter completed={completedTodos} total={totalToods}/>
            <TodoSearch 
              searchValue = {searchValue}
              setSearchValue = {setSearchValue}
            />
            <div className='todo-list-container'>
              <div className='todo-list'>
                <TodoList>
                  {searchedTodos.map(todo => (
                    <TodoItem 
                      key={todo.text}
                      text={todo.text}
                      completed = {todo.completed}
                      onComplete = {() => completeTodo(todo.text)}
                      unCompleteTodo = {(() => unCompleteTodo(todo.text))}
                      onDelete = {() => deleteTodo(todo.text)}
                    />                    
                  ))}
                </TodoList>              
              </div>
            </div>
          </div>
        </div>       
      </main>      
    </>
  );
}

export default App;

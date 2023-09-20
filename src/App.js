import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import { NewTodo }  from './NewTodo';
import React from 'react';
import artImg from "./img/Task.svg"

const defaultTodos = [
  {text: "Cortar Tomates", completed: true},
  {text: "Hacer la cama", completed: false},
  {text: "Desayunar", completed: true},
  {text: "Trabajar", completed: false},
  {text: "Comer", completed: false},
  {text: "Cenar", completed: false},
  {text: "Caminar", completed: false},
  {text: "Estudiar", completed: false},
  {text: "Repasar", completed: false},
]

function App() {
  const [searchValue, setSearchValue] = React.useState("")
  console.log("los usuarios estan buscando la tarea: " + searchValue)

  const [todos, setTodos] = React.useState(defaultTodos)

  const completedTodos = todos.filter( todo => !!todo.completed).length
  const totalToods = todos.length

  const searchedTodos = todos.filter(
    (todo) => {
      const textTodo = todo.text.toLocaleLowerCase()
      const textSearch = searchValue.toLocaleLowerCase()
     return textTodo.includes(textSearch)
    }
  )

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
                    completed = {todo.completed}/>
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

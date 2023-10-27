import React from 'react';
import { useTodos } from './useTodos';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { LoadingTodo } from "../LoadingTodo"
import { ErrorTodo } from "../ErrorTodo"
import { FirstTodo } from "../FirstTodo"
import { TodoContext } from './useTodos';
import { CreateTodo } from '../CreateTodo';
import artImg from "../img/Task.svg"

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
    loading,
    error,
    searchedTodos,
    completeTodo,
    unCompleteTodo,
    deleteTodo,
    completedTodos,
    totalToods,
    searchValue,
    setSearchValue,
    addTodo,
  } = useTodos()
  return (
    <>
      <main className='todo-app'>
        <div className='tarea'>
          <div className='box-nueva-tarea'>
            <CreateTodo
              addTodo={addTodo}
            />
            <div className='image-task-man'>
              <img src={artImg} alt="Task-man"/>
            </div>
          </div>                     
          <div className='box-mis-tareas'>
            <h1 className='titulo-mis-tareas'>Mis Tareas</h1>

            <TodoCounter
              completedTodos = {completedTodos}
              totalToods = {totalToods}
            />
            <TodoSearch
              searchValue = {searchValue}
              setSearchValue = {setSearchValue}
            />

            <div className='todo-list-container'>
              
              {(!loading && searchedTodos.length === 0) && <FirstTodo/>}
              <div className='todo-list'>

                <TodoList>
                  {loading && <LoadingTodo/>}
                  {error && <ErrorTodo/>}

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

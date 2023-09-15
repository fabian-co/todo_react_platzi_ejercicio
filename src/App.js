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
  {text: "Hacer la cama", completed: true},
  {text: "Desayunar", completed: false},
  {text: "Trabajar", completed: false},
]

function App() {
  return (
    <>
      <main className='todo_app'>
        <div className='tarea'>
          <div className='box_nueva_tarea'>
            <div className='crear_tarea_nueva'>
              <h1>Nueva Tarea</h1>
              <h4>Nombre de la tarea</h4>
              <NewTodo/>
              <CreateTodoButton/> 
            </div>
            <div className='image_task_man'>
              <img src={artImg} alt="Task_man"/>
            </div>
          </div>                     
          <div className='box_mis_tareas'>
            <h1 className='titulo_mis_tareas'>Mis Tareas</h1>
            <TodoCounter completed={1} total={4}/>
            <TodoSearch />
            <div className='todo_list'>
              <TodoList>
                {defaultTodos.map(todo => (
                  <TodoItem 
                  key={todo.text}
                  text={todo.text}
                  completed = {todo.completed}/>
                ))}
              </TodoList>              
            </div>
          </div>
        </div>       
      </main>      
    </>
  );
}

export default App;

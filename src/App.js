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
  {text: "Trabajar", completed: true},
]

function App() {
  return (
    <>
      <main>
        <div className='tarea'>
          <div className='box_nueva_tarea'>
            <h1>Nueva Tarea</h1>
            <h4>Nombre de la tarea</h4>
            <NewTodo/>
            <CreateTodoButton/> 
            <div className='image_task_man'>
              <img src={artImg} alt="Task_man"/>
            </div>
          </div>                     
          <div className='box_mis_tareas'>
            <h1 className='titulo_mis_tareas'>Mis Tareas</h1>
            <TodoCounter completed={16} total={20}/>
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

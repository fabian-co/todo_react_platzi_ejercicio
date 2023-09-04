import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';

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
        <div className='nueva_tarea'>
          <div className='box_nueva_tarea'>
            <h1>Nueva Tarea</h1>
            <CreateTodoButton/> 
          </div>                     
        </div>

        <div className='mis_tareas'>
          <div className='box_mis_tareas'>
            <TodoCounter completed={16} total={20}/>
            <TodoSearch />

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
      </main>      
    </>
  );
}

export default App;

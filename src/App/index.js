import React from 'react';
import { AppUI } from "./AppUI"
import { TodoProvider } from '../TodoContext';

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
  return(
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  )  
}

export default App;

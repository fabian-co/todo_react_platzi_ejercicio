import React from "react"
import "./TodoCounter.css"

function TodoCounter({completedTodos, totalToods}){ 
  return(
    <h3>
      Completada {completedTodos} de {totalToods}
    </h3>
  )
}

export {TodoCounter}
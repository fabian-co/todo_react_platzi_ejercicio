import React from "react"
import "./TodoCounter.css"
import { TodoContext } from "../TodoContext"

function TodoCounter(){
  const {completedTodos, totalToods} = React.useContext(TodoContext)

  return(
    <h3>
      Completada {completedTodos} de {totalToods}
    </h3>
  )
}

export {TodoCounter}
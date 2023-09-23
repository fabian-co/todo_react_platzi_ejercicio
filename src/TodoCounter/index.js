import "./TodoCounter.css"

function TodoCounter({total, completed}){
    return(
      <h3>
        Completada {completed} de {total}
      </h3>
    )
  }

export {TodoCounter}
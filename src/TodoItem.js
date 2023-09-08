import "./TodoItem.css"

function TodoItem({text, completado}){
    return(
      <div className="todo_item">
        <li>
          <input className="checkbox_tarea" type="checkbox" name="tarea completada"></input>
          <p>{text}</p>
          <span>X</span>
        </li>        
      </div>
    )
  }

export {TodoItem}
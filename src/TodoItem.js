import "./TodoItem.css"
import React from 'react';


function TodoItem({text, completed, onComplete, onDelete, unCompleteTodo}){  

    //estado para invertir el estado true o false en este caso usado para el checked y classname todoitem
    const [isChecked, setIsChecked] = React.useState(completed)

    const handleCheckboxChange = () => {
      setIsChecked(!isChecked)
    }

    //funcion para actualizar el check en el estado
    const handleClick = () => {
      if (!isChecked){
        onComplete()
      } else {
        unCompleteTodo()
      }
    }
  
    return(
      <div className={`todo-item ${isChecked ? "todo-item-completed" : ""}`} >
        <li>
          <label className="custom-checkbox">
            <input
             type={`checkbox`}
             onClick={handleClick}   
             checked={isChecked}
             onChange={handleCheckboxChange}
            />
            <span className="checkmark"> 
             {isChecked ? <span className="material-symbols-outlined cheked">done</span> : null}
            </span>            
          </label>
          <p>{text}</p>
          <span className="material-symbols-outlined" onClick={onDelete}>do_not_disturb_on</span>
        </li>        
      </div>
    )
  }

export {TodoItem}
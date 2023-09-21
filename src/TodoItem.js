import "./TodoItem.css"


function TodoItem({text, completed, onComplete, onDelete}){  
  
    return(
      <div className={`todo-item ${completed && "todo-item-completed"}`} >
        <li>
          <label className="custom-checkbox">
            <input
             type={`checkbox`}
             onClick={onComplete}   
             checked={completed}
            />
            <span className="checkmark"> 
             {completed ? <span className="material-symbols-outlined cheked">done</span> : null}
            </span>            
          </label>
          <p>{text}</p>
          <span className="material-symbols-outlined" onClick={onDelete}>do_not_disturb_on</span>
        </li>        
      </div>
    )
  }

export {TodoItem}
import "./TodoItem.css"


function TodoItem({text, completed}){  
  
    return(
      <div className={`todo-item ${completed && "todo-item-completed"}`} >
        <li>
          <label className="custom-checkbox">
            <input type={`checkbox`} checked={completed}/>
            <span className="checkmark"> 
             {completed ? <span class="material-symbols-outlined cheked">done</span> : null}
            </span>            
          </label>
          <p>{text}</p>
          <span class="material-symbols-outlined">do_not_disturb_on</span>
        </li>        
      </div>
    )
  }

export {TodoItem}
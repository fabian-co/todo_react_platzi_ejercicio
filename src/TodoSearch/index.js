import React from "react"
import "./TodoSearch.css"
import { TodoContext } from "../TodoContext"

function TodoSearch(){ 
  
  const {searchValue, setSearchValue} = React.useContext(TodoContext)
  
  return(
    <>
      <div className="todo-search-section">
        <div className="todo-search-area">
          <input
            className="todo-search"
            placeholder="Buscar tarea"
            value={searchValue}
            onChange={(event) => {
              setSearchValue(event.target.value)              
            }}
          />
          <div className="search-simbol">
            <span className="material-symbols-outlined">search</span>
          </div>
        </div>
      </div>
    </>
  )
}

export {TodoSearch}
import React from "react"
import "./TodoSearch.css"

function TodoSearch({
  searchValue,
  setSearchValue
}){  
  return(
    <>
      <div className="todo-search-section">
        <div div className="todo-search-area">
          <input
            className="todo-search"
            placeholder="Buscar tarea"
            value={searchValue}
            onChange={(event) => {
              setSearchValue(event.target.value)              
            }}
          />
          <div class="search-simbol">
            <span class="material-symbols-outlined">search</span>
          </div>
        </div>
      </div>
    </>
  )
}

export {TodoSearch}
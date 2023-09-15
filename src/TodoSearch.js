import "./TodoSearch.css"

function TodoSearch(){
    return(
      <>
        <div className="todo-search-section">
          <div div className="todo-search-area">
            <input className="todo-search" placeholder="Buscar tarea"/>
            <div class="search-simbol">
              <span class="material-symbols-outlined">search</span>
            </div>
          </div>
        </div>
      </>
    )
  }

export {TodoSearch}
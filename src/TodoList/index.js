

function TodoList(props){
    return(
      <section className="TodoList-Container">
        {props.error && props.onError()}
        {props.loading && props.onLoading()}

        {(!props.loading && props.totalTodos === 0) && props.onEmptyTodos()}

        {(!!props.totalTodos && props.searchedTodos.length === 0) && props.onEmptySearchTodos(props.searchText)}

        {props.searchedTodos.map(props.render)}
        <ul>
          {props.children}
        </ul>
      </section>
    )
  }

export {TodoList}
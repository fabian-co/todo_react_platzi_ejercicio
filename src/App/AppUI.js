import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { NewTodo }  from '../NewTodo';
import { LoadingTodo } from "../LoadingTodo"
import { ErrorTodo } from "../ErrorTodo"
import { FirstTodo } from "../FirstTodo"
import artImg from "../img/Task.svg"

function AppUI ({
    loading,
    error,
    completedTodos,
    totalToods,
    searchValue,
    setSearchValue,
    searchedTodos, 
    completeTodo,
    unCompleteTodo,
    deleteTodo,
}) {
    return (
        <>
          <main className='todo-app'>
            <div className='tarea'>
              <div className='box-nueva-tarea'>
                <div className='crear-tarea-nueva'>
                  <h1>Nueva Tarea</h1>
                  <h4>Nombre de la tarea</h4>
                  <NewTodo/>
                  <CreateTodoButton/> 
                </div>
                <div className='image-task-man'>
                  <img src={artImg} alt="Task-man"/>
                </div>
              </div>                     
              <div className='box-mis-tareas'>
                <h1 className='titulo-mis-tareas'>Mis Tareas</h1>
                <TodoCounter completed={completedTodos} total={totalToods}/>
                <TodoSearch 
                  searchValue = {searchValue}
                  setSearchValue = {setSearchValue}
                />
                <div className='todo-list-container'>
                  <div className='todo-list'>
                    <TodoList>
                      {loading && <LoadingTodo/>}
                      {error && <ErrorTodo/>}
                      {(!loading && searchedTodos === 0) && <FirstTodo/>}

                      {searchedTodos.map(todo => (
                        <TodoItem 
                          key={todo.text}
                          text={todo.text}
                          completed = {todo.completed}
                          onComplete = {() => completeTodo(todo.text)}
                          unCompleteTodo = {(() => unCompleteTodo(todo.text))}
                          onDelete = {() => deleteTodo(todo.text)}
                        />                    
                      ))}
                    </TodoList>              
                  </div>
                </div>
              </div>
            </div>       
          </main>      
        </>
      );
}

export { AppUI }
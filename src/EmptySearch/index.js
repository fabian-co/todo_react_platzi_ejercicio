import { FormCreateTodo } from "../FormCreateTodo"
import "./EmptySearch.css"

function EmptySearch(props) {
    
    return (
        <>     
            <div className="EmptySearch">
                <p >La tarea {props.searchText} no existe</p>
                <p>¿Deseas crear la tarea: {props.searchText}?</p>
                <FormCreateTodo addTodo = {props.addTodo} visible={false} valueInput={props.searchText}/>
            </div>       
        </>
    )
}

export {EmptySearch}
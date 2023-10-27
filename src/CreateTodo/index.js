import React from "react"
import "./CreateTodo.css"


function CreateTodo({addTodo}) {
    const [newTodoValue, setNewTodoValue] = React.useState("")

    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }

    const onSubmit = (event) => {   
        addTodo(newTodoValue)
        setNewTodoValue("")
        event.preventDefault()                
    }
    return (
        <div className='crear-tarea-nueva'>
            <h1>Nueva Tarea</h1>
            <h4>Nombre de la tarea</h4>

            <form className="formTodo" onSubmit={onSubmit}>                
                <input
                    value={newTodoValue}
                    onChange={onChange}
                    className="input-new-todo"
                    placeholder="Escribir la nueva Tarea"/>

                <button className="crear_tarea_button" type="submit">Crear Tarea</button>
            </form>
        </div>
    )
}

export { CreateTodo }

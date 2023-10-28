import React from "react"
import "./FormCreateTodo.css"
import { CreateTodoButtom } from "../CreateTodoButtom" 

function FormCreateTodo({addTodo, visible = true, valueInput}) {
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
        <>
            <form className="formTodo" onSubmit={onSubmit}>                
                <input
                    style = {{ display: visible ? "block" : "none" }}
                    value={newTodoValue || valueInput}
                    onChange={onChange}
                    className="input-new-todo"
                    placeholder="Escribir la nueva Tarea"/>

                <CreateTodoButtom/>
            </form>
        </>
    )
}

export default FormCreateTodo;



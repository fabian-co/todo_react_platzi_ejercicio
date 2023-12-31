import React, { useEffect } from "react"
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

    useEffect(() => {
        if(valueInput !== newTodoValue){
            setNewTodoValue(valueInput || "")
        }
    }, [valueInput])


    return (
        <>
            <form className="formTodo" onSubmit={onSubmit}>                
                <input
                    style = {{ display: visible ? "block" : "none" }}
                    value={newTodoValue}
                    onChange={onChange}
                    className="input-new-todo"
                    placeholder="Escribir la nueva Tarea"/>

                <CreateTodoButtom/>
            </form>
        </>
    )
}

export { FormCreateTodo };
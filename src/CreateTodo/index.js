import React from "react"
import { FormCreateTodo } from "../FormCreateTodo"


function CreateTodo({addTodo}) {
    
    return (
        <div className='crear-tarea-nueva'>
            <h1>Nueva Tarea</h1>
            <h4>Nombre de la tarea</h4>

            <FormCreateTodo addTodo = {addTodo}/>
        </div>
    )
}

export { CreateTodo }

import React from "react";
import { TodoContext } from "../TodoContext";

function TodoForm(){
    const {
        addTodo,
        setOpenModal
    } = React.useContext(TodoContext);
    const [newTodoValue,setNewTodoValue] = React.useState('');

    const onChange = (event) => {
      setNewTodoValue(event.target.value);
    }

    const onCancel = () => {
        setOpenModal(false);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }
    return (
        <form onSubmit={onSubmit}>
            <label>..</label>
            <textarea 
                onChange={onChange}
                placeholder="Descripcion de la tarea"
            />
            <div>
                <button onClick={onCancel}>Cancelar</button>
                <button  type="submit">Añadir</button>
            </div>
        </form>
    )
}

export {TodoForm}
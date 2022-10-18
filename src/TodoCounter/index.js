import React from "react";
import './TodoCounter.css';
import { TodoContext } from "../TodoContext";

function TodoCounter(){
    const {totalTodos, totalCompleted} = React.useContext(TodoContext);
    return (
        <h2 className="TodoCounter">Has completado {totalCompleted} de {totalTodos} TODOs</h2>
    )
}

export {TodoCounter};
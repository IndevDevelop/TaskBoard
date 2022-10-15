import React from "react";
import './TodoItem.css';

function TodoItem(props){
    return (
        <li>
            <span className={`Todo-Icon ${props.completed && 'Todo-Icon--Activated'}`}
                    onClick={props.onCompleted}>✔</span>
            <p className={`${props.completed && 'Todo-Item--Check'}`}>
                {props.text}
            </p>
            <span className="Todo-Item--Deleted"
                onClick={props.onDelete}>X</span>
        </li>
    )
}

export {TodoItem};
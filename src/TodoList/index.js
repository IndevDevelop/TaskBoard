import React from "react";
import './TodoList.css';

function TodoList(props){
    return (
        <section className="TodoSection">
            <ul className="TodoList">
                {props.children}
            </ul>
        </section>
    )
}

export {TodoList};
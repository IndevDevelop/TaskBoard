import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";


function AppUI(){
    const {err, 
        loading, 
        searchTodos, 
        completedTodo, 
        deleteTodo,
        openModal,
        setOpenModal} = React.useContext(TodoContext);
    return (
        <React.Fragment>
            <TodoCounter/>
            <TodoSearch/>
            <TodoList>
                {err && <p>Ah ocurrido un error!</p>}
                {loading && <p>Cargando tareas...</p>}                
                {(!loading && !searchTodos.length) && <p>NO hay tareas, agrega una nueva</p>}

                {searchTodos.map(todo => (
                <TodoItem 
                    key={todo.text} 
                    text={todo.text}
                    completed = {todo.completed} 
                    onCompleted ={()=> {completedTodo(todo.text)}}
                    onDelete = {()=>{deleteTodo(todo.text)}} />
                ))}
            </TodoList>
            
            {!!openModal && (
                <Modal>
                    <TodoForm/>
                </Modal>
            )}

            <CreateTodoButton 
                setOpenModal = {setOpenModal}
            />
        </React.Fragment>
    )
}

export {AppUI};
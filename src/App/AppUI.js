import React from "react";
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';

function AppUI(
    {
        err,
        loading,
        totalTodos,
        totalCompleted,
        searchValue,
        setSearchValue,
        searchTodos,
        completedTodo,
        deleteTodo}
){

    return (
        <React.Fragment>
            <TodoCounter 
                total={totalTodos}
                completed={totalCompleted}
            />
            <TodoSearch 
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />
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
            <CreateTodoButton></CreateTodoButton>
        </React.Fragment>
    )
}

export {AppUI};
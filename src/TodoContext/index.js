import React from "react";
import { useLocalStorage } from "./useLocalStorage";
const TodoContext = React.createContext();

function TodoProvider(props){
    const {
        item: todos, 
        saveItem: saveTodos,
        loading,
        err
    } = useLocalStorage("TODOS_V1",[]);

    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);
    const totalTodos = todos.length;
    const totalCompleted = todos.filter((todo) => !!todo.completed).length;
    const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
            completed: false,
            text
        });
        saveTodos(newTodos);
    }
    
    const completedTodo = (text) => {
        const todoIndex = todos.findIndex( todo => {
        return todo.text === text
        });
        const newTodos = [...todos];
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
    }

    const deleteTodo = (text) => {
        const todoIndex = todos.findIndex( todo => {
        return todo.text === text
        });
        const newTodos = [...todos];
        newTodos.splice(todoIndex,1);
        saveTodos(newTodos);
    }

    //Proceso para buscar TODOs
    let searchTodos = [];
    if(!searchValue.length >= 1){
        searchTodos = todos;
    } else {
        searchTodos = todos.filter(todo => {
        const todoText = todo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();

        return (todoText.includes(searchText))
        })
    }

    return(
        <TodoContext.Provider value={{
            loading,
            err,
            totalTodos,
            totalCompleted,
            searchValue,
            setSearchValue,
            searchTodos,
            addTodo,
            completedTodo,
            deleteTodo,
            openModal,
            setOpenModal
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export {TodoContext, TodoProvider}
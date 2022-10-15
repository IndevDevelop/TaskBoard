import './App.css';
import React from 'react';
import { AppUI } from './AppUI';


const defaultTodos = [
  {text: "Clases de ingles", completed: true},
  {text: "Clases de Redes: Llevar materiales para la clase y poder realizar el laboratorio", completed: false},
  {text: "Clases de Auditoria", completed: false}
]


function App(props) {
  const [todos, setTodos] = React.useState(defaultTodos)
  const [searchValue, setSearchValue] = React.useState('');

  const totalTodos = todos.length;
  const totalCompleted = todos.filter((todo) => !!todo.completed).length;
  const completedTodo = (text) => {
    const todoIndex = todos.findIndex( todo => {
      return todo.text === text
    });
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex( todo => {
      return todo.text === text
    });
    const newTodos = [...todos];
    newTodos.splice(todoIndex,1);
    setTodos(newTodos);
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

  return (
    <AppUI
      totalTodos={totalTodos}
      totalCompleted={totalCompleted}
      searchValue={searchValue}
      setSearchValue={searchValue}
      searchTodos={searchTodos}
      completedTodo={completedTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;

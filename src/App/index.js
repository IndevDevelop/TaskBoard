import './App.css';
import React from 'react';
import { AppUI } from './AppUI';


//const defaultTodos = [
  //{text: "Clases de ingles", completed: true},
  //{text: "Clases de Redes: Llevar materiales para la clase y poder realizar el laboratorio", completed: false},
  //{text: "Clases de Auditoria", completed: false}
//]

function useLocalStorage(itemName, initialValue){
  const [err, setErr] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initialValue);

  React.useEffect(() =>{
    setTimeout(()=>{
      try {
        const localStorageItem = localStorage.getItem(itemName); 
        let parseItem;
        if(!localStorageItem){
          localStorage.setItem(itemName,initialValue);
          parseItem = [];
        } else {
          parseItem = JSON.parse(localStorageItem);
        }

        setItem(parseItem);
        setLoading(false);
      } catch (error) {
        setErr(error);
      }
    },1000)
  });

  const saveItem = (newItem) =>{
    try {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);
    } catch (error) {
      setErr(err);
    }
  }

  return {
    item,
    saveItem,
    loading,
    err
  }
}


function App() {

  const {
    item: todos, 
    saveItem: saveTodos,
    loading,
    err
  } = useLocalStorage("TODOS_V1",[]);
  const [searchValue, setSearchValue] = React.useState('');

  const totalTodos = todos.length;
  const totalCompleted = todos.filter((todo) => !!todo.completed).length;
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

  return (
    <AppUI
      loading={loading}
      error={err}
      totalTodos={totalTodos}
      totalCompleted={totalCompleted}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchTodos={searchTodos}
      completedTodo={completedTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;

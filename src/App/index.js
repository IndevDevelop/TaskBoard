import './App.css';
import React from 'react';
import { TodoProvider } from '../TodoContext';
import { AppUI } from './AppUI';


//const defaultTodos = [
  //{text: "Clases de ingles", completed: true},
  //{text: "Clases de Redes: Llevar materiales para la clase y poder realizar el laboratorio", completed: false},
  //{text: "Clases de Auditoria", completed: false}
//]


function App() {
  

  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}

export default App;

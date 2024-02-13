import {TextField, Typography} from '@mui/material'
import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';



function App() {

  const [todos, setTodos] = useState([])
  useEffect(() => {
  document.addEventListener("keydown", function(Event){
    if(Event.key === "Enter") {
      let todotext = document.getElementById("newtodo").value
      if (todotext) {
        setTodos([...todos, {title: todotext, completed: false}])
        todotext = ""
      }
    }
  })

}, [todos])
  
  console.log(todos)

  return (
    <>
      <Typography variant="h2" component="h1">ToDo</Typography>
      <TextField id="newtodo" variant="outlined" label="Ny todo-oppgave" ></TextField>
    </>
  );
}

export default App;

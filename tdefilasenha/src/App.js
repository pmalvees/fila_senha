import React, {useState} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/home'
import Client from './pages/client'


const App = () =>  {
  
const [fila, setFila] = useState([])

const addFila = (newData) => {
  setFila(old => [...old, newData])
}

const removeDaFila = () => {
  let newFila = [...fila];
  newFila.shift();

  setFila(newFila)
}
  
  return (
    <Router>
      <Switch>

        <Route exact path="/client" >
          <Client 
          filaAtual={fila} removePrimeiroDaFila={() => removeDaFila()}/>
        </Route>
        <Route exact path="/home">
        <Home 
          adicionaFila={(novafila) => addFila(novafila) }/>
        </Route>

      </Switch>
    </Router>
  );
}
export default App;


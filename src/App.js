import logo from './logo.svg';
import './App.css';
import { store } from './Redux/store';
import {useState} from "react";


function App() {
  const {dispatch} = store;
  const {counter}= store.getState();
  const [state, setState ] = useState(0);

  store.subscribe(() =>{
    console.log(store.getState())
    setState(prev=>prev+1)
  })

  const handleIncrement = () =>{
      dispatch({type:"INCREMENT", payload:1})
      // console.log(counter)
  }

  const handleDecrement = () =>{
    dispatch({type:"DECREMENT", payload:1})
  }
  return (
    <div className="App">
      <h1>Counter : {counter}</h1>
      <div>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
      </div>
    </div>
  );
}

export default App;

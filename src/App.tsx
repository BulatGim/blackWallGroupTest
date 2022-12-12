import React, {useEffect} from 'react';
import './App.css';
import Main from "./pages/Main/Main";
import {useDispatch} from "react-redux";
import {currensyActions} from "./store/currencyLayer";

function App() {
    const {
        initialize
    }=currensyActions
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(initialize())
    },[])
  return (
    <div className="App">
      <Main/>
    </div>
  );
}

export default App;

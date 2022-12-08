
import './App.css';

import Parent from './pages/Parent';
import { createContext, useState } from 'react';
import ShortForm from './pages/ShortForm/ShortForm';
import Long from './pages/ShortForm/Long';
import Counter from './pages/Counter/Counter';
 export const COUNTER_CONTEXT= createContext()
function App() {
 
  const [count, setCount]=useState(0)
  const value ={
    count,setCount
  }
  return (
   
   <COUNTER_CONTEXT.Provider value={value}>
   <div className="App">
     {/* <Parent></Parent>  */}
  {/* <ShortForm></ShortForm> */}
  <Long></Long>
  {/* <Counter></Counter> */}
    </div>
    </COUNTER_CONTEXT.Provider>
  );
}

export default App;

import React, { useReducer } from 'react'

const Counter = () => {
 const intialState = 0;

 const reducer=(state,action)=>{
    console.log(action)
    if(action.type = "INCREMENT"){
            return state + action.payload

    }
    else if(action.type ="DECREMENT"){
        return state - action.payload;

        
    }
 }

 const [state,dispatch]= useReducer(reducer,intialState);
    return (
    <div className='Container'>

    <div className='Card'>
    
      <div className='Card-body'>
           <h1>Child</h1>
           <h1>{state}</h1> 
    
           <div className='Buton'>
         
            <button   onClick={()=>dispatch({type:"DECREMENT",payload:5})} className='Buton-stection1'>
          Decrement
         </button>
         
      
             <button onClick={()=>dispatch({type:"INCREMENT",payload:4})} className='Button-section2'>
               Increment
             </button>
          </div>

      </div>

      </div>       


  </div>
  )
}

export default Counter

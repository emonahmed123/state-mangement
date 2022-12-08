import React, { useContext, useState } from 'react'
import { COUNTER_CONTEXT } from '../../App'

import './Child.css'
function Child() {

 const {count,setCount} =useContext(COUNTER_CONTEXT)
  return (
    <div className='Container'>

      <div className='Card'>
      
        <div className='Card-body'>
             <h1>Child</h1>
             <h1>{count}</h1> 
      
             <div className='Buton'>
           {
            count<1 ?  <button disabled className='Buton-stection1'>
            Decrement
           </button>: <button onClick={()=>setCount(count-1)} className='Buton-stection1'>
            Decrement
           </button>
           }
        
               <button onClick={()=>setCount((prvState)=>prvState+1)} className='Button-section2'>
                 Increment
               </button>
            </div>

        </div>

        </div>       
  

    </div>
  )
}

export default Child

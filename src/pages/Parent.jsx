import React, { useContext } from 'react'
import { COUNTER_CONTEXT } from '../App'
import Child from './Child/Child'
import ShortForm from './ShortForm/ShortForm'

const Parent = () => {
    const {count} = useContext(COUNTER_CONTEXT)
   
   
    return (
    <div className='Container'>

    <div className='Card'>
    
      <div className='Card-body'>
           <h1>Parent</h1>
           <h1>{count}</h1>
    
         
          </div>

      </div>

          
  
      <Child></Child>


     

  </div>



   
  )
}

export default Parent

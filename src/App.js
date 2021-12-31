import React from 'react'
import './App.css'
import {useSelector,useDispatch} from 'react-redux'
import { incNum,decNum } from './actions/index';


const App = () => {
  const mystate =useSelector((state)=>{
   return(state.changeTheNumber)
  })
  const dispatch = useDispatch();
  return (
    <>
      <div className='conatiner'>
        <h4>Increment/Decrement Counter</h4>
        <h4>Using React Redux</h4>
        <div className='quantity'>
          <a className='quantity-minus' title='Decrement' onClick={()=>dispatch(decNum())}><span>-</span></a>
          <input name='quantity' type='text' className='quantity-input' value={mystate}></input>
          <a className='quantity-plus' title='Increment' onClick={()=>dispatch(incNum())}><span>+</span></a>
        </div>


      </div>
    </>
  )
}
export default App;
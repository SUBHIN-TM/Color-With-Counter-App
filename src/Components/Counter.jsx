import { useSelector, useDispatch } from 'react-redux'
import { decrement,increment,reset,customValue } from '../features/counter/counterSlice'
import { useState } from 'react'



const Counter=()=>{
 const count=useSelector((state)=>state.counter.value)
 const error = useSelector((state) => state.counter.error)
 const [value,setValue]=useState('')
 const dispatch=useDispatch()

 const applyCustomValue=()=>{
  dispatch(customValue(Number(value)))
 }

 const getColorClass = () => {
  if (count >= 1 && count <= 10) {
    return 'bg-red-500';
  } else if (count >= 11 && count <= 20) {
    return 'bg-green-500';
  } else if (count >= 21 && count <= 30) {
    return 'bg-yellow-500';
  }else{
    return ""
  }
};

const resetFunction=()=>{
  setValue('')
  dispatch(reset())
}

 return(
    <>
    <div className='outLine m-auto' >
      <div className={`innerLine colorChange ${getColorClass()}`} >
        <div className='valueBox m-auto mt-6 font-bold text-3xl rounded-lg' >{count}</div> 
        {error && (<div className='mt-3 bg-white w-80 m-auto '> <h1 className='text-red-600'>Invalid Value</h1></div>)}   
        <div className='flex justify-around mt-11'>
          <button onClick={()=>dispatch(decrement())} className='border p-2  bg-black  text-white font-semibold'> ➖ Decrement </button>
          <button onClick={()=>dispatch(increment(1))} className='border p-2 bg-black  text-white font-semibold'>➕ Increment</button>
        </div>
        <div className='mt-10 ' >
        <label className='font-semibold' htmlFor="value">Custom Value :</label>  <input onChange={(e)=>setValue(e.target.value)} value={value} className='border border-black w-40' type="number" name="" id="" />
        </div>
        <button onClick={applyCustomValue} className='border p-1 bg-black text-white font-semibold mt-2 ml-28 px-3'>Apply</button> <button onClick={()=>resetFunction()} className='border p-1 bg-black text-white font-semibold mt-2 ml-5 px-3'>Reset</button>
        <div className='border mt-4 p-10 bg-black'>
          <div className={`border  colorChange ${getColorClass()}`}> 
          <h1 className='font-bold p-1'>VALUE RANGES</h1>
          <div className='flex flex-col pb-4'>
          <label>Red : 1 - 10</label>
          <label>Green : 11 - 20</label>
          <label>Yellow : 21 - 30</label>
          </div>
          </div>
        </div>
      </div>    
    </div>
    </>
 )


}


export default Counter;


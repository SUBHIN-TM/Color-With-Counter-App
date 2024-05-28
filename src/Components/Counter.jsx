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

const colorMapping= {
  1: 'bg-red-100',
  2: 'bg-red-200',
  3: 'bg-red-300',
  4: 'bg-red-400',
  5: 'bg-red-500',
  6: 'bg-red-600',
  7: 'bg-red-700',
  8: 'bg-red-800',
  9: 'bg-red-900',
  10:'bg-red-950',
  11:'bg-green-100',
  12:'bg-green-200',
  13:'bg-green-300',
  14:'bg-green-400',
  15:'bg-green-500',
  16:'bg-green-600',
  17:'bg-green-700',
  18:'bg-green-800',
  19:'bg-green-900',
  20:'bg-green-950',
  21:'bg-yellow-100',
  22:'bg-yellow-200',
  23:'bg-yellow-300',
  24:'bg-yellow-400',
  25:'bg-yellow-500',
  26:'bg-yellow-600',
  27:'bg-yellow-700',
  28:'bg-yellow-800',
  29:'bg-yellow-900',
  30:'bg-yellow-950',

 }

 const getColorClass = () => {
 

  if (count >= 1 && count <= 10) {
    return colorMapping[count]
  } else if (count >= 11 && count <= 20) {
    return colorMapping[count]
  } else if (count >= 21 && count <= 30) {
    return colorMapping[count]
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
        <div className='valueBox m-auto mt-6 font-bold text-3xl rounded-lg bg-green' >{count}</div> 
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


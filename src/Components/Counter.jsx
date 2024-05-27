import { useSelector, useDispatch } from 'react-redux'
import { decrement,increment } from '../features/counter/counterSlice'



const Counter=()=>{
 const count=useSelector((state)=>state.counter.value)
 const dispatch=useDispatch()
 return(
    <>
    <div >
     <div className='border border-red-700 h-5/6'>
       {count}
     </div>
    </div>
    </>
 )


}


export default Counter;




// export function Counter() {
//   const count = useSelector((state) => state.counter.value)
//   const dispatch = useDispatch()

//   return (
//     <div>
//       <div>
//         <button
//           aria-label="Increment value"
//           onClick={() => dispatch(increment(1))}
//         >
//           Increment
//         </button>
//         <span>{count}</span>
//         <button
//           aria-label="Decrement value"
//           onClick={() => dispatch(decrement())}
//         >
//           Decrement
//         </button>
//       </div>
//     </div>
//   )
// }

// export default Counter
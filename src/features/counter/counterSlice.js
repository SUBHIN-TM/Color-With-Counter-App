import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  error:''
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state,action) => {
      if(state.value == 30){
       state.error +=" Value Out Of Limit "
      }else{
        state.value += action.payload
        state.error =""
      }
      
    },
    decrement: (state) => {
      if(state.value == 0){
        state.error +=" Value Out Of Limit "
      }else{
        state.value -= 1
        state.error =""
      }
     
    },
    reset:(state)=>{
      state.value=0
      state.error =""
    },
    customValue:(state,action)=>{
      if(action.payload >30 || action.payload< 0){
        state.error +=" Value Out Of Limit "
      }else{
        state.error =""
        state.value=action.payload
      }
     
    }
  },
})


export const { increment, decrement,reset,customValue} = counterSlice.actions
export default counterSlice.reducer
import {configureStore, createSlice } from '@reduxjs/toolkit';


const cart = createSlice({

    name : 'cart',
    initialState : [],
    reducers : {
        addItem(state,action){
            const index = state.findIndex((findId)=>{return findId.id === action.payload.id})
            // const index = state.findIndex((findId)=>{return findId.id === action.payload.id && findId.option === action.payload.option})
            if(index>-1){
                state[index].count++
            }else{
                state.push(action.payload)
            }
           
        },
        deleteItem(state,action){
            const index = state.findIndex((findId)=>{return findId.id === action.payload})
            // const index = state.findIndex((findId)=>{return findId.option === action.payload})
            state.splice(index,1)
        },
        addCount(state,action){
            const index = state.findIndex((findId)=>{return findId.id === action.payload})
            // const index = state.findIndex((findId)=>{return findId.option === action.payload})
            state[index].count++
        },
        minCount(state,action){
            const index = state.findIndex((findId)=>{return findId.id === action.payload})
            // const index = state.findIndex((findId)=>{return findId.option === action.payload})
            if(state[index].count > 1){
                state[index].count--
    
            }
        },
        deleteAll(state,action){
            return []
        }
    }


})



export const {addItem,deleteItem,addCount,minCount,deleteAll} = cart.actions 
//dispatch와 짝


export default configureStore({
    reducer : {
        cart: cart.reducer
    }
})
//useSelector와 짝
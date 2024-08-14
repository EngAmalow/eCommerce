 import { createSlice } from "@reduxjs/toolkit";
 

 const cartSlice = createSlice({
    name: 'cart',

    initialState:{
        items: [],
        totalPrice: 0,

    },

reducers:{
    addCartItems:(yuu, action)=>{

        yuu.items.push(action.payload)

    },

calculateTotalPrice: (state)=>{
    let total = 0 
    state.items.forEach((alabta)=>{
        total += alabta.price
    })
    state.totalPrice = total
} ,
// remove cart

RemoveItemFromCart: (state, action)=> {
    state.items = state.items.filter((product) => product.id != action.payload.id )
 
}

 }
    
    })
    
     export const  {addCartItems, calculateTotalPrice, RemoveItemFromCart} = cartSlice.actions
     export default cartSlice.reducer
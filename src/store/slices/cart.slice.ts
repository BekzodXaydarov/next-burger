import { createSlice } from "@reduxjs/toolkit";
import { StaticImageData } from "next/image";
export interface initialStateCartI {
    id: number
    title: string
    price: string
    image: StaticImageData
    gram: string
    category: string
    quantity: number
}

const LocalStorage = localStorage.getItem("cart")

const initialState: initialStateCartI[] = LocalStorage ? JSON.parse(LocalStorage) : [];

const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct: (state, { payload }) => {
            const excitedFood = state.filter((item) => item.id === payload.id)
            if (excitedFood.length > 0) {
                state = state.map((item) => item.id === payload.id ? { ...item, quantity: item.quantity + 1 } : item)
                localStorage.setItem("cart", JSON.stringify(state))
                return state
            } else {
                state.push({ ...payload, quantity: 1 })
                localStorage.setItem("cart", JSON.stringify(state))
                return state
            }
        },
        deleteProduct: (state, { payload }) => {
            state = state.filter((item) => item.id !== payload.id)
            return state
        },
        MinusQuantity: (state,{payload})=>{
            const excitedFood = state.filter((item) => item.id === payload.id)
            if (excitedFood.length > 0) {
                state = state.map((item) => item.id === payload.id ? { ...item, quantity: item.quantity - 1 } : item).filter((item)=>item.quantity > 0)
                localStorage.setItem("cart", JSON.stringify(state))
                return state
            }
        }
    }
})

export const { addProduct, deleteProduct,MinusQuantity } = CartSlice.actions
export default CartSlice.reducer
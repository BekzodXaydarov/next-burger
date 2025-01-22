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

const initialState: initialStateCartI[] = []

const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct: (state, { payload }) => {
            const excitedFood = state.filter((item) => item.id === payload.id)
            if (excitedFood) {
                state = state.map((item) => item.id === payload.id ? { ...item, quantity: item.quantity + 1 } : item)
            } else {
                state.push({ ...payload, quantity: 1 })
            }
            return state
        },
        deleteProduct: (state, { payload }) => {
            state = state.filter((item) => item.id !== payload.id)
            return state
        }
    }
})

export const { addProduct, deleteProduct } = CartSlice.actions
export default CartSlice.reducer
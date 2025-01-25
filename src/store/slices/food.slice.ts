import { FoodsData } from "@/utils/data";
import { createSlice } from "@reduxjs/toolkit";
import { StaticImageData } from "next/image";

export interface FoodI {
    id: number
    title: string
    price: number
    image: StaticImageData
    gram: string
    category: string
    description:string
    foodDetails: string[]
    quantity: number
}
export interface InitialStateFoodI {
    category: string
    staticData: FoodI[]
}
const initialState: InitialStateFoodI = { category: "бургеры", staticData: FoodsData,  }

const FoodSlice = createSlice({
    name: "food",
    initialState,
    reducers: {
        setCategory: (state, { payload }) => {
            state.category = payload
            return state
        },
    }
})

export const { setCategory } = FoodSlice.actions
export default FoodSlice.reducer
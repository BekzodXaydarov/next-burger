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
}
export interface InitialStateFoodI {
    category: string
    staticData: FoodI[]
}
const initialState: InitialStateFoodI = { category: "бургеры", staticData: FoodsData }

const FoodSlice = createSlice({
    name: "food",
    initialState,
    reducers: {
        filterFoodByCategory: (state, { payload }) => {
            state.staticData = state.staticData.filter((item: FoodI) => item.category === payload)
            return state
        },
        setCategory: (state, { payload }) => {
            state.category = payload
            return state
        }
    }
})

export const { filterFoodByCategory,setCategory } = FoodSlice.actions
export default FoodSlice.reducer
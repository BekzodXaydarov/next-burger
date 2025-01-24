import { configureStore } from "@reduxjs/toolkit";
import FoodSlice, { InitialStateFoodI } from "@/store/slices/food.slice"
import CartSlice, { initialStateCartI } from "./slices/cart.slice";
import ModalSlice, { InitialStateModalI } from "./slices/modal.slice";

export interface StoreI {
    foods: InitialStateFoodI
    cart: initialStateCartI[]
    modal: InitialStateModalI
}

export const store = configureStore<StoreI>({
    reducer: {
        foods: FoodSlice,
        cart: CartSlice,
        modal: ModalSlice
    }
})
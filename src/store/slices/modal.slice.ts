import { createSlice } from "@reduxjs/toolkit";

export interface InitialStateModalI {
    isOpen: boolean
    modalName: string
    adition?: any
}

let initialState: InitialStateModalI = { isOpen: false, modalName: "", adition: {} }

const ModalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        openModal: (state, { payload }) => {
            state = { isOpen: true, modalName: payload.modalName, adition: payload.adition }
            return state
        },
        closeModal: (state, _) => {
            state = { isOpen: false, modalName: "", adition: {} }
            return state
        }
    }
})

export const { openModal, closeModal } = ModalSlice.actions
export default ModalSlice.reducer
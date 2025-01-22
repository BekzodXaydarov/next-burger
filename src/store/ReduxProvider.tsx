"use client"

import { Provider } from "react-redux"
import { store } from "./store"

export interface ReduxProviderI {
    children: React.ReactNode
}
const ReduxProvider: React.FC<ReduxProviderI> = ({ children }) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default ReduxProvider
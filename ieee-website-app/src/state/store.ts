import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import userReducer from "./user-slice";

// Create a redux store with the resume reducer
export const store = configureStore({
    reducer: {
        // Add the user slice to the store
        // This will add the user slice to the store with the key "user"
        // You can access the user state with state.user
        user: userReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
});

// Export the store and the hooks
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";

import fooReducer from "./foo-slice";

// Create a redux store with the resume reducer
export const store = configureStore({
  reducer: {
    // Add the foo slice to the store
    // This will add the user slice to the store with the key "foo"
    // You can access the user state with state.foo
    foo: fooReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

// Export the store and the hooks
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

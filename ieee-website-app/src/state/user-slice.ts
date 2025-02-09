import { UserState } from "@/models/data/user";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export const initialState: UserState = {
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<UserState>) {
            return action.payload;
        },
        clearUser(state) {
            return initialState;
        }
    }
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
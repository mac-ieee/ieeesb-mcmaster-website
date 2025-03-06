import type { PayloadAction } from "@reduxjs/toolkit";

import { createSlice } from "@reduxjs/toolkit";

export interface FooState {
  foo: string;
}

export const initialState: FooState = {
  foo: "",
};

const fooSlice = createSlice({
  name: "foo",
  initialState,
  reducers: {
  },
});

export const {  } = fooSlice.actions;
export default fooSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

type feadbackState = {
  service: number;
  price: number;
  quality: number;
  detailFeadback: string;
};

type feadbackList = {
  coments: feadbackState[];
};

const initialState: feadbackList = {
  coments: [],
};

export const feadbackSlice = createSlice({
  name: "feadback",
  initialState,
  reducers: {
    addFeadback: (state, action: PayloadAction<feadbackState>) => {
      state.coments.push(action.payload);
    },
  },
});

export const { addFeadback } = feadbackSlice.actions;

export const selectFeadback = (state: RootState) => state.feadback;
export default feadbackSlice.reducer;

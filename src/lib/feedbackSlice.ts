import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface feadbackState {
  service: number;
  price: number;
  quality: number;
  detailFeadback: string;
}

const initialState: feadbackState = {
  service: 0,
  price: 0,
  quality: 0,
  detailFeadback: "",
};

export const feadbackSlice = createSlice({
  name: "feadback",
  initialState,
  reducers: {
    serviceStar: (state, action: PayloadAction<number>) => {
      state.service = action.payload;
    },
    priceStar: (state, action: PayloadAction<number>) => {
      state.price = action.payload;
    },
    qualityStar: (state, action: PayloadAction<number>) => {
      state.quality = action.payload;
    },
    detailString: (state, action: PayloadAction<string>) => {
      state.detailFeadback = action.payload;
    },
  },
});

export const { serviceStar, priceStar, qualityStar, detailString } =
  feadbackSlice.actions;

export const selectFeadback = (state: RootState) => state.feadback;
export default feadbackSlice.reducer;

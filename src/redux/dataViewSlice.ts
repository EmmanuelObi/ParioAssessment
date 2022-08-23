import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  loading: false,
};

const dataView = createSlice({
  name: "dataview",
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setData(state, action: PayloadAction<any>) {
      state.data = action.payload;
    },
  },
});

export const dataViewActions = dataView.actions;
export const dataViewReducer = dataView.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    user: {
      userId: "",
      email: "",
      tokenId: "",
    },
    loading: false,
    error: "",
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {},
});
export default authSlice.reducer;

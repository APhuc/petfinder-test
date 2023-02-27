import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    access_token: "",
    expires_in: "",
    token_type: "",
  },
  reducers: {
    addToken(state, { payload }) {
      return (state = payload);
    },
    removeToken(state) {
      return (state = {
        access_token: "",
        expires_in: "",
        token_type: "",
      });
    },
  },
});

const { actions, reducer } = userSlice;
export const { addToken,removeToken } = actions;
export default reducer;

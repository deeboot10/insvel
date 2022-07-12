import { createSlice, configureStore } from "@reduxjs/toolkit";
import { getDefaultMiddleware } from "@reduxjs/toolkit";

// initial state of auth
const authInitialValue = {
  isSignedIn: false,
  userData: {},
};
const authSlice = createSlice({
  name: "auth",
  initialState: authInitialValue,
  reducers: {
    login(state, action) {
      state.isSignedIn = true;
      state.userData = action.payload.userData;
    },
    logout(state) {
      state.isSignedIn = false;
      state.userData = {};
    },
  },
});

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
  middleware: getDefaultMiddleware({ serializableCheck: false }),
});

export const authActions = authSlice.actions;

export default store;

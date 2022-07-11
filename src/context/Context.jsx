import { createSlice, configureStore } from "@reduxjs/toolkit";
import { getDefaultMiddleware } from "@reduxjs/toolkit";

// initial state of auth
const authInitialValue = {
  isSignedIn: false,
  userAuth: {},
  userStore: {},
};
const authSlice = createSlice({
  name: "auth",
  initialState: authInitialValue,
  reducers: {
    login(state, action) {
      state.isSignedIn = true;
      //   state.userStore = action.payload.userStore;
    },
    logout(state) {
      state.isSignedIn = false;
      //   state.userStore = {};
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

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  _id: string;
  email: string;
  role: string;
  exp: string;
  iat: string;
}

interface UserState {
  token: string;
  user: User;
}

const initialState: UserState = {
  token: "",
  user: {
    _id: "",
    email: "",
    role: "",
    exp: "",
    iat: "",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    setUser: (state, action: PayloadAction<User>) => {
      state.user = { ...action.payload };
    },
    clearUser: (state) => {
      state.token = "";
      state.user = {
        _id: "",
        email: "",
        role: "",
        exp: "",
        iat: "",
      };
    },
  },
});

export const { setToken, setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;

export type { UserState };

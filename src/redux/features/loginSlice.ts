/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { User } from "../../styles";

// Async thunk for login
export const login = createAsyncThunk(
  "auth/login",
  async (
    { email, password }: { email: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.post(
        "https://meeting-room-booking-system-peach.vercel.app/api/auth/login",
        { email, password },
        { headers: { "Content-Type": "application/json" } }
      );

      // Axios automatically parses the response
      const data = response.data;
      if (response.status !== 200) {
        throw new Error(data.message || "Failed to login");
      }

      const decodedUser = jwtDecode<User>(data.token);

      return { user: decodedUser, token: data.token };
    } catch (error: any) {
      return rejectWithValue(
        error.message || "Something went wrong during login"
      );
    }
  }
);

interface LoginState {
  loading: boolean;
  error: string | null;
}

const loginSlice = createSlice({
  name: "login",
  initialState: { loading: false, error: null } as LoginState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default loginSlice.reducer;

export type { LoginState };

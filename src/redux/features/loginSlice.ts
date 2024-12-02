/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";
import { User } from "../../styles";

export const login = createAsyncThunk(
  "auth/login",
  async (
    { email, password }: { email: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (!response.ok) {
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
        state.error = null; // Reset error when starting a new login attempt
      })
      .addCase(login.fulfilled, (state) => {
        state.loading = false;
        // You can store the user or token here if needed
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string; // Ensures error is a string
      });
  },
});

export default loginSlice.reducer;

export type { LoginState };

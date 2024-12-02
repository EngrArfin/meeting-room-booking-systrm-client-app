/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode"; // Adjust based on your imports
import { User } from "../../styles"; // Adjust the import path based on your project structure

// Signup async action
export const signup = createAsyncThunk(
  "auth/signup",
  async (
    {
      name,
      email,
      password,
    }: { name: string; email: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Failed to signup");
      }

      const decodedUser = jwtDecode<User>(data.token);

      return { user: decodedUser, token: data.token };
    } catch (error: any) {
      return rejectWithValue(
        error.message || "Something went wrong during signup"
      );
    }
  }
);

interface SignupState {
  loading: boolean;
  error: string | null;
}

const signupSlice = createSlice({
  name: "signup",
  initialState: { loading: false, error: null } as SignupState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signup.pending, (state) => {
        state.loading = true;
        state.error = null; // Reset error on new request
      })
      .addCase(signup.fulfilled, (state) => {
        state.loading = false;
        // You can store user or token here if needed
      })
      .addCase(signup.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string; // Assign error message
      });
  },
});

export default signupSlice.reducer;

export type { SignupState };

/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { User } from "../../styles";

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
      // Use axios to send the POST request
      const response = await axios.post(
        "https://meeting-room-booking-system-peach.vercel.app/api/auth/signup",
        { name, email, password },
        { headers: { "Content-Type": "application/json" } }
      );

      const data = response.data;

      if (response.status !== 200) {
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
        state.error = null;
      })
      .addCase(signup.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(signup.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default signupSlice.reducer;

export type { SignupState };

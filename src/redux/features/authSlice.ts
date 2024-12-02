/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../styles"; // Adjust the import path based on your project structure

// Define initial state for auth
interface AuthState {
  user: User | null;
  token: string | null;
  loading: boolean;
  error: string | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  user: null,
  token: null,
  loading: false,
  error: null,
  isAuthenticated: false,
};

// Async thunk for login
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

      return { user: data.user, token: data.token };
    } catch (error: any) {
      return rejectWithValue(
        error.message || "Something went wrong during login"
      );
    }
  }
);

// Async thunk for signup
export const signup = createAsyncThunk(
  "auth/signup",
  async (
    {
      name,
      email,
      password,
      phone,
      address,
      role,
    }: {
      name: string;
      email: string;
      password: string;
      phone: string;
      address: string;
      role: string;
    },
    { rejectWithValue }
  ) => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, phone, address, role }),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to sign up");
      }

      return { user: data.user, token: data.token };
    } catch (error: any) {
      return rejectWithValue(
        error.message || "Something went wrong during signup"
      );
    }
  }
);

// Create the slice with reducers and extraReducers
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder
      // Handle login actions
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Handle signup actions
      .addCase(signup.pending, (state) => {
        state.loading = true;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.error = null;
      })
      .addCase(signup.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setUser, setToken, logout } = authSlice.actions;
export default authSlice.reducer;

export type { AuthState };

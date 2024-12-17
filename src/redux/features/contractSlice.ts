/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface ContractState {
  loading: boolean;
  success: string | null;
  error: string | null;
}

export const submitContractForm = createAsyncThunk<any, any>(
  "contract/submitContractForm",
  async (formData: any, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "https://meeting-room-booking-system-peach.vercel.app/api/contract",
        formData
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || "An error occurred");
    }
  }
);

const contractSlice = createSlice({
  name: "contract",
  initialState: {
    loading: false,
    success: null,
    error: null,
  } as ContractState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(submitContractForm.pending, (state) => {
        state.loading = true;
        state.success = null;
        state.error = null;
      })
      .addCase(submitContractForm.fulfilled, (state, action) => {
        state.loading = false;
        state.success = action.payload;
        state.error = null;
      })
      .addCase(submitContractForm.rejected, (state, action) => {
        state.loading = false;
        state.success = null;
        state.error = action.payload as string; // Cast payload to string
      });
  },
});

export default contractSlice.reducer;

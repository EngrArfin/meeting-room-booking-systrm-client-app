/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface BookingState {
  bookingData: any;
  loading: boolean;
  error: string | null;
}

const initialState: BookingState = {
  bookingData: null,
  loading: false,
  error: null,
};

// Async thunk to handle the booking submission
export const submitBooking = createAsyncThunk(
  "booking/submitBooking",
  async (bookingData: any, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/bookings",
        bookingData
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(
        error.response.data.message || "Error while booking"
      );
    }
  }
);

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(submitBooking.pending, (state) => {
        state.loading = true;
      })
      .addCase(submitBooking.fulfilled, (state, action) => {
        state.loading = false;
        state.bookingData = action.payload;
        state.error = null;
      })
      .addCase(submitBooking.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default bookingSlice.reducer;

/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";

interface BookingState {
  bookingDetails: any | null;
  loading: boolean;
  error: string | null;
}

const initialState: BookingState = {
  bookingDetails: null,
  loading: false,
  error: null,
};

export const submitBooking = createAsyncThunk(
  "bookings/submitBooking",
  async (
    bookingData: {
      name: string;
      email: string;
      phone: string;
      timeSlot: string;
      date: string;
      roomId: string;
    },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/booking",
        bookingData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Booking failed. Something went wrong."
      );
    }
  }
);

const bookingSlice = createSlice({
  name: "bookings",
  initialState,
  reducers: {
    resetBookingState: (state) => {
      state.bookingDetails = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitBooking.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(submitBooking.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.bookingDetails = action.payload;
        state.error = null;
      })
      .addCase(submitBooking.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { resetBookingState } = bookingSlice.actions;

export const selectBooking = (state: RootState) => state.bookings;

export default bookingSlice.reducer;

/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";

// Define the Booking interface
interface Booking {
  name: string;
  email: string;
  timeSlot: string;
  date: string;
  roomId: string;
  userId?: string; // Optional property
}

// Define the initial state type for Booking
interface BookingState {
  bookingDetails: Booking | null;
  loading: boolean;
  error: string | null;
}

// Initial state
const initialState: BookingState = {
  bookingDetails: null,
  loading: false,
  error: null,
};

// Async thunk for submitting booking
export const submitBooking = createAsyncThunk<
  Booking,
  Booking,
  { rejectValue: string }
>("bookings/submitBooking", async (bookingData, { rejectWithValue }) => {
  try {
    const response = await axios.post(
      "https://meeting-room-booking-system-peach.vercel.app/api/bookings",
      bookingData,
      { headers: { "Content-Type": "application/json" } }
    );
    return response.data;
  } catch (error: any) {
    return rejectWithValue(
      error.response?.data?.message || "Booking failed. Something went wrong."
    );
  }
});

// Slice
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
      .addCase(
        submitBooking.fulfilled,
        (state, action: PayloadAction<Booking>) => {
          state.loading = false;
          state.bookingDetails = action.payload;
          state.error = null;
        }
      )
      .addCase(submitBooking.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "An unknown error occurred.";
      });
  },
});

export const { resetBookingState } = bookingSlice.actions;
export const selectBooking = (state: RootState) => state.bookings;
export default bookingSlice.reducer;

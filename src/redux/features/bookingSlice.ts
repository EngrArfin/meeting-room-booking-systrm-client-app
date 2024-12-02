/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";

// Define the Booking interface
interface Booking {
  name: string;
  email: string;
  phone: string;
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

// Define the initial state for the slice
const initialState: BookingState = {
  bookingDetails: null,
  loading: false,
  error: null,
};

// Define the async thunk for submitting booking
export const submitBooking = createAsyncThunk<
  Booking,
  Booking,
  { rejectValue: string }
>("bookings/submitBooking", async (bookingData, { rejectWithValue }) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/bookings",
      bookingData,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    return response.data; // Returning data directly as Booking type
  } catch (error: any) {
    return rejectWithValue(
      error.response?.data?.message || "Booking failed. Something went wrong."
    );
  }
});

// Create the slice for bookings
const bookingSlice = createSlice({
  name: "bookings",
  initialState,
  reducers: {
    // Action to reset the booking state
    resetBookingState: (state) => {
      state.bookingDetails = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Handle pending state for submitBooking
      .addCase(submitBooking.pending, (state) => {
        state.loading = true;
        state.error = null; // Clear error on new request
      })
      // Handle fulfilled state for submitBooking
      .addCase(
        submitBooking.fulfilled,
        (state, action: PayloadAction<Booking>) => {
          state.loading = false;
          state.bookingDetails = action.payload; // Save the booking details
          state.error = null; // Clear any errors
        }
      )
      // Handle rejected state for submitBooking
      .addCase(submitBooking.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "An unknown error occurred.";
      });
  },
});

// Export actions
export const { resetBookingState } = bookingSlice.actions;

// Selector to get the booking state from the store
export const selectBooking = (state: RootState) => state.bookings;

// Export the reducer for the slice
export default bookingSlice.reducer;

// Exporting the BookingState type
export type { BookingState };

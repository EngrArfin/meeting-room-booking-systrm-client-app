import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";

interface Room {
  name: string;
  date: string;
  time: string;
  duration: string;
}

interface UserBooking {
  id: string;
  date: string;
  totalAmount: number;
  status: string;
  rooms: Room[];
}

interface UserBookingState {
  userBookings: UserBooking[];
  loading: boolean;
  error: string | null;
}

const initialState: UserBookingState = {
  userBookings: [],
  loading: false,
  error: null,
};

export const fetchUserBookings = createAsyncThunk(
  "userBookings/fetchUserBookings",
  async () => {
    const response = await axios.get(
      "https://meeting-room-booking-system-peach.vercel.app/api/userBookings"
    );
    return response.data;
  }
);

const userBookingSlice = createSlice({
  name: "userBookings",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserBookings.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserBookings.fulfilled, (state, action) => {
        state.loading = false;
        state.userBookings = action.payload;
      })
      .addCase(fetchUserBookings.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to load user bookings";
      });
  },
});

export const selectUserBookings = (state: RootState) => state.userBookings;

export default userBookingSlice.reducer;
export type { UserBookingState };

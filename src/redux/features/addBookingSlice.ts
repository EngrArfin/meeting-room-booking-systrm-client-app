import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Booking {
  id: string; // Unique ID for each booking
  roomName: string;
  roomDescription: string;
  pricePerHour: number;
  capacity: number;
  category: string;
  bookingDate: string;
  bookingTime: string;
  image: File | null;
}

interface BookingState {
  bookings: Booking[];
}

const initialState: BookingState = {
  bookings: [],
};

const addBookingSlice = createSlice({
  name: "addBookings",
  initialState,
  reducers: {
    addBooking: (state, action: PayloadAction<Booking>) => {
      state.bookings.push(action.payload);
    },
  },
});

export const { addBooking } = addBookingSlice.actions;

export default addBookingSlice.reducer;

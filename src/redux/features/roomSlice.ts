/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the Room interface
interface Room {
  image: string[];
  roomName: string;
  roomNo: string;
  floorNo: string;
  capacity: number;
  pricePerSlot: number;
  amenities: string[];
}

// Define the RoomState type
interface RoomState {
  selectedRoom: Room | null;
}

// Initial state for RoomState
const initialState: RoomState = {
  selectedRoom: null,
};

// Create the roomSlice
const roomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {
    // Action to set the selected room
    setRoom: (state, action: PayloadAction<Room>) => {
      state.selectedRoom = action.payload;
    },
  },
});

// Export actions
export const { setRoom } = roomSlice.actions;

// Default export of the room reducer
export default roomSlice.reducer;

// Export the RoomState type
export type { RoomState };

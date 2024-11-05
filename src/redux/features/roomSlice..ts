// roomSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the shape of the Room type
interface Room {
  image: string;
  roomName: string;
  roomNo: string;
  floorNo: string;
  capacity: number;
  pricePerSlot: number;
  amenities: string[];
}

// Define the initial state type
interface RoomState {
  selectedRoom: Room | null;
}

// Initial state
const initialState: RoomState = {
  selectedRoom: null,
};

const roomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {
    setRoom: (state, action: PayloadAction<Room>) => {
      state.selectedRoom = action.payload;
    },
  },
});

export const { setRoom } = roomSlice.actions;
export default roomSlice.reducer;

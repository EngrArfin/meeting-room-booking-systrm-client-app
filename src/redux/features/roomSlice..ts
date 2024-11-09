import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Room {
  image: string[];
  roomName: string;
  roomNo: string;
  floorNo: string;
  capacity: number;
  pricePerSlot: number;
  amenities: string[];
}

interface RoomState {
  selectedRoom: Room | null;
}

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

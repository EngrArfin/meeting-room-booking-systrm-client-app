/* export interface IRoom {
  roomId: string;
  image: string;
  roomName: string;
  roomNo: string;
  floorNo: number;
  capacity: number;
  pricePerSlot: number;
  amenities: string;
  bookingId: string;
  userId: string;
  date: string;
  timeSlot: {
    start: string;
    end: string;
  };
  status: string;
  purpose: string;
} */

// Example IRoom interface
export interface IRoom {
  roomId: string;
  image: string[];
  roomName: string;
  roomNo: string;
  floorNo: number;
  capacity: number;
  pricePerSlot: number;
  amenities: string[]; // Ensure this is an array of strings
  booking: Array<{
    bookingId: string;
    userId: string;
    date: string;
    timeSlot: { start: string; end: string };
    status: string;
    purpose: string;
  }>;
}

/* export interface IRoom {
  _id: string;
  image: string;
  roomName: string;
  capacity: number;
  pricePerSlot: number;
}
 */

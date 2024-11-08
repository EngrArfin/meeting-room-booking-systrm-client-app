export interface User {
  user: any;
  _id: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
  token?: string;
  role: "admin" | "user"; // Include the role property here
  __v: number;
}

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

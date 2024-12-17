/* eslint-disable @typescript-eslint/no-explicit-any */
export interface User {
  user?: any;
  _id: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
  token?: string;
  role: string /*  "admin" | "user" */;
  __v: number;
}

export interface IRoom {
  timeSlot: any;
  date: any;
  _id: string;
  image: string[];
  roomName: string;
  roomNo: string;
  floorNo: string;
  capacity: number;
  pricePerSlot: number;
  amenities: string[];
  availability: string;
  booking: Array<{
    bookingId: string;
    userId: string;
    date: string;
    timeSlot: { start: string; end: string };
    status: string;
    purpose: string;
  }>;
}

export interface Room {
  _id: string;
  name: string;
  date: string;
  time: string;
  duration: string;
}

export interface UserBooking {
  id: string;
  date: string;
  totalAmount: number;
  status: string;
  rooms: Room[];
}

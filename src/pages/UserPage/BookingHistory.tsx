import { useEffect, useState } from "react";

interface Booking {
  id: string;
  date: string;
  totalAmount: number;
  status: string;
  rooms: {
    name: string;
    date: string;
    time: string;
    duration: string;
  }[];
}

const BookingHistory = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);

  // Mock data - in a real app, this would come from an API
  useEffect(() => {
    const mockBookings: Booking[] = [
      {
        id: "1",
        date: "2024-10-01",
        totalAmount: 200.5,
        status: "Completed",
        rooms: [
          {
            name: "Conference Room A",
            date: "2024-10-02",
            time: "10:00 AM",
            duration: "2 hours",
          },
        ],
      },
      {
        id: "2",
        date: "2024-09-15",
        totalAmount: 120.75,
        status: "Pending",
        rooms: [
          {
            name: "Meeting Room B",
            date: "2024-09-16",
            time: "1:00 PM",
            duration: "3 hours",
          },
        ],
      },
    ];

    setBookings(mockBookings);
  }, []);

  return (
    <div className="container mx-auto my-8 p-4">
      <h1 className="text-2xl font-bold mb-4">Booking History</h1>
      {bookings.length === 0 ? (
        <p>You have no booking history.</p>
      ) : (
        <div className="space-y-4">
          {bookings.map((booking) => (
            <div
              key={booking.id}
              className="border rounded-lg p-4 shadow-md bg-white"
            >
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-semibold">Booking #{booking.id}</h2>
                <span
                  className={`text-sm font-medium ${
                    booking.status === "Completed"
                      ? "text-green-500"
                      : booking.status === "Pending"
                      ? "text-yellow-500"
                      : "text-gray-500"
                  }`}
                >
                  {booking.status}
                </span>
              </div>
              <div className="mb-2">
                <p className="text-sm text-gray-600">
                  Date: {new Date(booking.date).toLocaleDateString()}
                </p>
                <p className="text-sm text-gray-600">
                  Total: ${booking.totalAmount.toFixed(2)}
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Rooms</h3>
                <ul>
                  {booking.rooms.map((room, index) => (
                    <li
                      key={index}
                      className="flex justify-between text-gray-700"
                    >
                      <span>
                        {room.name} - {room.date} at {room.time} (
                        {room.duration})
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BookingHistory;

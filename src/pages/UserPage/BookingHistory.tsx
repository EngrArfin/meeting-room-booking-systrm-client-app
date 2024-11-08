import { useEffect, useState } from "react";

interface Order {
  id: string;
  date: string;
  totalAmount: number;
  status: string;
  items: {
    name: string;
    quantity: number;
    price: number;
  }[];
}

const BookingHistory = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  // Mock data - in a real app, this would come from an API
  useEffect(() => {
    const mockOrders: Order[] = [
      {
        id: "1",
        date: "2024-10-01",
        totalAmount: 150.25,
        status: "Delivered",
        items: [
          { name: "Mechanical Keyboard", quantity: 1, price: 100 },
          { name: "Wrist Rest", quantity: 1, price: 50.25 },
        ],
      },
      {
        id: "2",
        date: "2024-09-15",
        totalAmount: 80.99,
        status: "Shipped",
        items: [{ name: "Wireless Mouse", quantity: 1, price: 80.99 }],
      },
    ];

    setOrders(mockOrders);
  }, []);

  return (
    <div className="container mx-auto my-8 p-4">
      <h1 className="text-2xl font-bold mb-4">Order History</h1>
      {orders.length === 0 ? (
        <p>You have no order history.</p>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <div
              key={order.id}
              className="border rounded-lg p-4 shadow-md bg-white"
            >
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-semibold">Order #{order.id}</h2>
                <span
                  className={`text-sm font-medium ${
                    order.status === "Delivered"
                      ? "text-green-500"
                      : "text-yellow-500"
                  }`}
                >
                  {order.status}
                </span>
              </div>
              <div className="mb-2">
                <p className="text-sm text-gray-600">
                  Date: {new Date(order.date).toLocaleDateString()}
                </p>
                <p className="text-sm text-gray-600">
                  Total: ${order.totalAmount.toFixed(2)}
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Items</h3>
                <ul>
                  {order.items.map((item, index) => (
                    <li
                      key={index}
                      className="flex justify-between text-gray-700"
                    >
                      <span>
                        {item.name} (x{item.quantity})
                      </span>
                      <span>${item.price.toFixed(2)}</span>
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

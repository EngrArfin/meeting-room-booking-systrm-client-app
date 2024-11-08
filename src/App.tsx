import { useEffect } from "react";
import { useAppDispatch } from "./redux/hooks";
import { setUser, setToken } from "./redux/features/authSlice";
import MainLayout from "./components/layout/MainLayout";

// Make sure this matches the structure of the User expected in Redux slice
interface User {
  _id: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
  role: string;
  __v: number;
}

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    // On page load, load user data and token from localStorage if available
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");

    if (storedUser && storedToken) {
      try {
        const parsedUser = JSON.parse(storedUser) as User;
        // Ensure the user data is valid before dispatching
        if (
          parsedUser &&
          parsedUser._id &&
          parsedUser.name &&
          parsedUser.email &&
          parsedUser.password
        ) {
          // Dispatch the user data and token to Redux store
          dispatch(setUser(parsedUser)); // `parsedUser` should match the `User` type expected in the Redux state
          dispatch(setToken(storedToken));
        } else {
          console.error("Invalid user data found in localStorage");
        }
      } catch (error) {
        console.error("Failed to parse user data:", error);
      }
    }
  }, [dispatch]);

  return <MainLayout />;
}

export default App;

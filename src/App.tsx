import { useEffect } from "react";
import { useAppDispatch } from "./redux/hooks";
import { setUser, setToken } from "./redux/features/authSlice";
import MainLayout from "./components/layout/MainLayout";
import { User } from "./styles"; // Import the User type from the appropriate file

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    // On page load, load user data and token from localStorage if available
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");

    if (storedUser && storedToken) {
      try {
        const parsedUser = JSON.parse(storedUser) as User;
        // Ensure the role is either 'admin' or 'user' before dispatching
        if (
          parsedUser &&
          parsedUser._id &&
          parsedUser.name &&
          parsedUser.email &&
          parsedUser.password &&
          (parsedUser.role === "admin" || parsedUser.role === "user")
        ) {
          dispatch(setUser(parsedUser));
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

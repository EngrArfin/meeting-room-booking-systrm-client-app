import { useEffect } from "react";
import { useAppDispatch } from "./redux/hooks";
import { setUser, setToken } from "./redux/features/authSlice";
import MainLayout from "./components/layout/MainLayout";
import { User } from "./styles";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");

    if (storedUser && storedToken) {
      try {
        const parsedUser = JSON.parse(storedUser) as User;

        // Check for user data validity
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
          console.error(
            "Invalid user data found in localStorage. Missing required properties."
          );
          localStorage.removeItem("user"); // Clean invalid data
          localStorage.removeItem("token");
        }
      } catch (error) {
        console.error("Failed to parse user data from localStorage:", error);
        localStorage.removeItem("user"); // Clean corrupted data
        localStorage.removeItem("token");
      }
    }
  }, [dispatch]);

  return <MainLayout />;
}

export default App;

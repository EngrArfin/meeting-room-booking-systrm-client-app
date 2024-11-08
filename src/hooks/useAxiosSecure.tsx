import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
/* import { clearToken } from "../redux/features/authSlice"; // Uncomment this if you're using clearToken action
 */ import { RootState } from "../redux/store";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000/api", // Change to your actual base URL
});

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state: RootState) => state.auth.token);

  useEffect(() => {
    const requestInterceptor = axiosSecure.interceptors.request.use(
      (config) => {
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    const responseInterceptor = axiosSecure.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response) {
          // Handle unauthorized access
          if (error.response.status === 401 || error.response.status === 403) {
            // Clear the token from the Redux store
            /* dispatch(clearToken()); */
            // Redirect to home page or login
            navigate("/");
          }
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axiosSecure.interceptors.request.eject(requestInterceptor);
      axiosSecure.interceptors.response.eject(responseInterceptor);
    };
  }, [token, dispatch, navigate]);

  return axiosSecure; // Return the axios instance
};

export default useAxiosSecure;

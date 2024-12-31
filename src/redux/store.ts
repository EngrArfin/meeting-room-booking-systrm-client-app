import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { baseApi } from "./api/api";
import authReducer from "./features/authSlice";
import loginReducer from "./features/loginSlice";
import signupReducer from "./features/signupSlice";
import roomReducer from "./features/roomSlice";
import bookingReducer from "./features/bookingSlice";
import userReducer from "./features/userSlice";
import userBookingReducer from "./features/userBookingSlice";
import contractReducer from "./features/contractSlice";
import addBookingReducer from "./features/addBookingSlice";
import todoReducer from "./features/todoSlice";

// Persist configuration for user reducer
const userPersistConfig = {
  key: "user",
  storage,
};

// Persist configuration for userBooking reducer
const userBookingPersistConfig = {
  key: "userBookings",
  storage,
};

// Create persisted reducers
const persistedUserReducer = persistReducer(userPersistConfig, userReducer);
const persistedUserBookingReducer = persistReducer(
  userBookingPersistConfig,
  userBookingReducer
);

// Configure the Redux store
export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    auth: authReducer,
    signup: signupReducer,
    login: loginReducer,
    room: roomReducer,
    bookings: bookingReducer,
    user: persistedUserReducer, // Persisted user reducer
    userBookings: persistedUserBookingReducer, // Persisted userBookings reducer
    contract: contractReducer,
    addBookings: addBookingReducer,
    todos: todoReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializable check for persisted states
    }).concat(baseApi.middleware), // Include middleware for RTK Query
});

// Persistor for the store
export const persistor = persistStore(store);

// Type definitions
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "http://localhost:5000/api" /* https://meeting-room-booking-system-peach.vercel.app/api */,

    credentials: "include",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");

      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["todo"],
  endpoints: (builder) => ({
    getRooms: builder.query({
      query: () => ({
        url: "/rooms",
        method: "GET",
      }),
    }),

    getBookings: builder.query({
      query: () => ({
        url: "/bookings",
        method: "GET",
      }),
    }),

    sendBooking: builder.mutation({
      query: (bookingData) => ({
        url: "/bookings",
        method: "POST",
        body: bookingData,
      }),
    }),

    signup: builder.mutation({
      query: (userData) => ({
        url: "/auth/signu",
        method: "POST",
        body: userData,
      }),
    }),

    login: builder.mutation({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
    }),

    getUsers: builder.query({
      query: () => ({
        url: "/users",
        method: "GET",
      }),
    }),

    getUserById: builder.query({
      query: (ObjectId) => ({
        url: `/users/${ObjectId}`,
        method: "GET",
      }),
    }),

    getUserBookings: builder.query({
      query: () => ({
        url: "/userbookings",
        method: "GET",
      }),
    }),
    /* User Add  */
    getTodos: builder.query({
      query: () => ({
        url: "/todos",
        method: "GET",
      }),
      providesTags: ["todo"],
    }),

    addTodo: builder.mutation({
      query: (sendData) => ({
        url: "/todos",
        method: "POST",
        body: sendData,
      }),
      invalidatesTags: ["todo"],
    }),

    deleteTodo: builder.mutation({
      query: (id: string) => ({
        url: `/todos/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["todo"],
    }),

    editTodo: builder.mutation({
      query: (sendData) => ({
        url: `/todos/${sendData.id}`,
        method: "PUT",
        body: sendData,
      }),
    }),
    toggleTodoCompletion: builder.mutation({
      query: (id: string) => ({
        url: `/todos/${id}/toggle`,
        method: "PATCH",
      }),
    }),
  }),
});

export const {
  useGetRoomsQuery,
  useGetBookingsQuery,
  useSendBookingMutation,
  useSignupMutation,
  useLoginMutation,
  useGetUsersQuery,
  useGetUserByIdQuery,
  useGetUserBookingsQuery,
  useGetTodosQuery,
  useAddTodoMutation,
  useDeleteTodoMutation,
  useEditTodoMutation,
  useToggleTodoCompletionMutation,
} = baseApi;

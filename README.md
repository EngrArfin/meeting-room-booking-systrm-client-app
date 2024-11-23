
# Meeting Room Booking System 

## Live Demo

Live Link here: [Meeting Room Booking System](https://meetingroombooking.netlify.app)

Backend Live Link: [Meeting Room Booking System]([https://meetingroombooking.netlify.app](https://meeting-room-booking-system-52iuvfxb6-engrarfins-projects.vercel.app/))



## Objective

This platform provides a seamless and intuitive experience for users booking meeting rooms in co-working spaces. It offers robust features for both regular users and administrators, with a focus on user-friendly design, secure processes, and efficient room management.

## Features

- **Secure Authentication**:
  - Supports login with email and social providers using **NextAuth**.
- **Dynamic Room Availability**:
  - Displays real-time availability of meeting rooms.
- **Booking Management**:
  - Users can book, edit, and cancel room reservations.
- **Responsive Design**:
  - Optimized for both desktop and mobile devices.

## Tech Stack

### Frontend:
- **React**: Component-based user interface.
- **Redux**: State management for handling user data and bookings.
- **Axios**: For API requests to the backend.
- **Tailwind CSS**: For styling the application.

### Installation process

1. **Clone the repository:**

   ```bash
   git clone (https://github.com/EngrArfin/meeting-room-booking-systrm-client-app)
   cd e-commerce-web-nextjs-client-app
   ```

   # install

   ```bash
   npm install
   ```

   # Create .env file and give your info...

   In order for this project to work, make sure to define the following environment variables in your .env file:

```bash
  NEXT_PUBLIC_MONGODB_URI=
  NEXTAUTH_URL=${process.env.NEXT_PUBLIC_API_URL}
  GITHUB_ID=
  GITHUB_SECRET=
  GOOGLE_ID=
  GOOGLE_SECRET=
  NEXTAUTH_SECRET=
```

# run project

```bash
   npm run dev
```

# React + TypeScript + Vite

# Meeting Room Booking System for Co-working Spaces

## Objective

This platform provides a seamless and intuitive experience for users booking meeting rooms in co-working spaces. It offers robust features for both regular users and administrators, with a focus on user-friendly design, secure processes, and efficient room management.

---

## Tech Stack

**Client:** React with Vite, TypeScript, Redux, RTK Query

**Server:** TypeScript, Node, Express, MongoDB, Mongoose, Zod.

## Deployment Step By Step

npm create vite

Project Name: mechanical-keyboard-shop-client-app

√ Select a framework: » React
√ Select a variant: » TypeScript

cd mechanical-keyboard-shop-client-app

```bash
  npm i
```

code .

```bash
  npm i react-router-dom react-hook-form antd
```

```bash
  npm run dev
```

## Run Project

![App Screenshot](c:\Users\DELL\Pictures\Screenshots\basic project.png)

#Project Basic Setup  
.env.local
.env.example

Src/
Assets/icons/images
Components/form/layout/ui
Config
Hooks
Lib
Pages
Redux
Routes
Styles
Utils

#Next

App.css delete
App.tsx. some clear
Index.css clear

## Running Tests

To run tests, run the following command

```bash
  npm run test
```

## If You want project clone and Run Locally

Clone the project

```bash
  git clone https://github.com/EngrArfin/mechanical-keyboard-shop-client-app.git
```

Go to the project directory

```bash
  cd mechanical-keyboard-shop-client-app
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

## Features

### Public Pages

1. **Homepage / Landing Page**

   - Header with Navigation Links (Home, Meeting Rooms, About Us, Contact Us, Login/Register)
   - Hero Section: Large banner with headline, subheadline, and CTA button
   - Service Advertisement Section: Highlights features like real-time availability, instant booking confirmation, flexible scheduling, and 24/7 support
   - Featured Rooms Section: Room cards with images, name, capacity, price, and "See Details" button
   - Why Choose Us and How It Works sections with customer testimonials

2. **About Us Page**

   - Our Mission, Meet the Team, and Our Story sections with creative visuals and animations

3. **Contact Us Page**

   - Contact form with name, email, subject, and message fields

4. **Error Pages**

   - Custom 404 page with navigation options to guide users back

5. **User Authentication Pages**
   - Sign-Up and Login pages with form validation and role-based access control (admin/user)

### User Pages (Private Routes)

6. **Meeting Rooms Page**

   - Room listings with search, filtering (by capacity, price), sorting, and pagination
   - Each room card includes image, name, capacity, price, and "See Details" button

7. **Room Details Page**

   - Detailed view with images, room name, floor number, capacity, price, amenities, and a "Book Now" button

8. **Booking Process**

   - Date and time selection, user information form, and available time slots display
   - Payment selection with integration for secure payments

9. **My Bookings Page**
   - Displays all user bookings with room name, date, time, and status (Confirmed/Unconfirmed)

### Admin Pages (Admin Only)

10. **Admin Dashboard**

- Room Management: Create, update, delete rooms
- Slots Management: Create, update, delete time slots
- Booking Management: Approve, reject, and delete bookings

---

## Installation

### Prerequisites

- **Node.js** (v14+)
- **MongoDB** (v4.0+)
- **Express.js** (v4+)
- **React** (v17+)
- **Stripe** or other Payment Gateway (e.g., SSLCommerz/AmarPay)

### Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/meeting-room-booking-system.git
   cd meeting-room-booking-system/backend
   ```

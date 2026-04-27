# HMS - Hospital Management System

A simple Hospital Management System built with React and Vite. This is a student-level lab project with a clean UI and basic functionality.

## Features

- **Login System**: Select between Patient or Doctor login
- **Patient Dashboard**: View patient details and book appointments
- **Doctor List**: Browse available doctors with their specializations
- **Appointment Booking**: Book appointments with doctors
- **Registration**: Simple registration form for new users
- **Contact Page**: Contact information and message form
- **Responsive Navigation Bar**: Easy navigation between pages

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx & Navbar.css
│   ├── Login.jsx & Login.css
│   ├── Register.jsx & Register.css
│   ├── PatientDetails.jsx & PatientDetails.css
│   ├── DoctorList.jsx & DoctorList.css
│   ├── AppointmentBooking.jsx & AppointmentBooking.css
│   └── Contact.jsx & Contact.css
├── App.jsx (Main app with routing)
├── App.css
├── index.css
└── main.jsx
```

## Technology Stack

- **React** - UI library
- **Vite** - Build tool
- **React Router DOM** - Routing
- **CSS** - Styling (basic CSS only, no frameworks)

## Installation

1. Navigate to the HMS directory
2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Application

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173/`

## Routes

- `/` - Login Page
- `/register` - Registration Page
- `/patient-details` - Patient Details Page (accessible after patient login)
- `/doctor-list` - Doctor List Page (accessible after doctor login)
- `/appointment` - Appointment Booking Page
- `/contact` - Contact Page

## Key Functionalities

### Login Page
- Two options: Patient or Doctor
- Routes to respective dashboards

### Patient Dashboard
- Displays patient information (static data)
- Shows assigned doctor and next appointment
- Option to book appointments

### Doctor List
- Shows list of 5 sample doctors
- Displays specialization, experience, contact info
- Book appointment button for each doctor

### Appointment Booking
- Select doctor, date, time, and reason
- Shows confirmation alert on successful booking

### Registration
- Simple form with name, email, phone, user type
- Registration confirmation alert

### Contact Page
- Hospital information display
- Contact form for inquiries

## Features Used

- BrowserRouter for client-side routing
- useNavigate hook for navigation
- useState hook for form state management
- Alert messages for user feedback
- Responsive CSS layouts
- Clean and simple UI

## Notes

- No backend or API integration
- No authentication system
- No database
- All data is static or stored in component state
- Focus on frontend functionality and UI

## Build for Production

```bash
npm run build
```

The optimized files will be in the `dist/` directory.


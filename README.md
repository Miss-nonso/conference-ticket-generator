# Conference Ticket Generator

Welcome to the **Conference Ticket Generator**! This project is a React-based application that allows users to generate a conference ticket by filling out a simple form. The form collects the user's full name, email address, and an avatar image URL. Upon successful submission, a visually appealing and responsive conference ticket is generated.

---

## Features

- **Form Inputs**:
  - Full Name
  - Email Address
  - Avatar Image URL (supports Cloudinary or any external image link)
- **Form Validation**:
  - Ensures all fields are filled out.
  - Validates email format.
  - Displays clear error messages for invalid inputs.
- **State Persistence**:
  - Form data is saved in `localStorage` to prevent loss on page refresh.
- **Ticket Generation**:
  - Displays the user's full name, email, and avatar in a beautifully designed ticket.
  - Ticket is only generated if all validations pass.
- **Accessibility**:
  - Fully accessible for screen readers.
  - Supports keyboard navigation.
- **Responsive Design**:
  - Optimized for all screen sizes, including mobile and desktop.

---

## Technologies Used

- **React**: For building the user interface.
- **React Hooks**: `useState`, `useEffect`, and custom hooks for state management.
- **LocalStorage**: For persisting form data.
- **CSS**: For styling and responsive design.
- **React Toastify**: For displaying success and error messages.

---

## How to Use

1. **Fill Out the Form**:

   - Enter your full name, email address, and an avatar image URL.
   - Ensure the email is in a valid format (e.g., `example@domain.com`).
   - The avatar URL should point to an image hosted on Cloudinary or any external service.

2. **Submit the Form**:

   - Click the "Generate Ticket" button.
   - If all inputs are valid, a conference ticket will be displayed.

3. **View Your Ticket**:
   - The ticket will show your name, email, and avatar in a visually appealing layout.

---

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/conference-ticket-generator.git
   ```
2. Navigate to the project directory
   ```bash
   cd conference-ticket-generator
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
5. Open your browser and visit `http://localhost:3000` to view the app.

---

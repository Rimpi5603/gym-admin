# 🏋️ Gym Admin Dashboard

A modern, responsive, and fully-featured Gym Management Admin Dashboard built with **React**, **Vite**, and **Tailwind CSS**. This application is designed to streamline day-to-day gym operations, allowing administrators to seamlessly manage members, trainers, subscription plans, payments, and daily attendance.

## ✨ Features

- **📊 Comprehensive Dashboard**: Get a bird's-eye view of your gym's performance with beautiful metric cards.
- **👥 Member Management**: Full CRUD operations for gym members. Add, edit, view, and delete member profiles seamlessly.
- **💪 Trainer Roster**: View your staff of trainers, their specialties, and manage their profiles.
- **🏷️ Membership Plans**: Easily manage different subscription tiers (e.g., Basic, Pro, Elite) with custom durations and pricing.
- **💳 Payment Tracking**: View transaction histories, payment statuses (Paid, Pending, Failed), and track revenue.
- **📅 Daily Attendance**: Track member check-ins and check-outs in real-time, with status flags for Present, Absent, and Late.
- **📱 Responsive Design**: Fully responsive layout featuring a slick mobile sidebar and hamburger menu for on-the-go management.
- **🔒 Secure Architecture**: Private routing and secure authentication flow for administrators.

## 🛠️ Tech Stack

- **Frontend Framework**: [React 18](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Routing**: [React Router DOM](https://reactrouter.com/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **State Management**: React Context API & Browser Local Storage (for persistent mock data)

## 🚀 Getting Started

Follow these steps to run the project locally on your machine.

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone <your-github-repo-url>
   cd gym-admin
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open in Browser**:
   Navigate to `http://localhost:5173` in your favorite web browser.

## 🗄️ Dummy API & Data Persistence

Currently, this frontend application utilizes [JSONPlaceholder](https://jsonplaceholder.typicode.com/) to mock API network requests. To simulate a real database environment for CRUD operations (like adding a new membership plan or marking attendance), the application intelligently utilizes the browser's **`localStorage`**. 

This means that any changes you make in the UI will persist across page reloads without needing an actual backend database!

---
*Built with ❤️ for modern fitness centers.*

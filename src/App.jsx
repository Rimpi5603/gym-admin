import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

import Members from "./pages/members/Members";
import AddMember from "./pages/members/AddMember";
import EditMember from "./pages/members/EditMember";

import Plans from "./pages/plans/Plans";
import AddPlan from "./pages/plans/AddPlan";
import EditPlan from "./pages/plans/EditPlan";
import Subscriptions from "./pages/subscriptions/Subscriptions";
import Payments from "./pages/payments/Payments";
import Attendance from "./pages/attendance/Attendance";
import Reports from "./pages/reports/Reports";
import Settings from "./pages/settings/Settings";

import ProtectedRoute from "./components/ProtectedRoute";
import AdminLayout from "./layouts/AdminLayout";

function App() {
  return (
    <Routes>
      {/* Public Route */}
      <Route path="/" element={<Login />} />

      {/* Protected Routes */}
      <Route
        element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/members" element={<Members />} />
        <Route path="/members/add" element={<AddMember />} />
        <Route path="/members/edit/:id" element={<EditMember />} />

        <Route path="/plans" element={<Plans />} />
        <Route path="/plans/add" element={<AddPlan />} />
        <Route path="/plans/edit/:id" element={<EditPlan />} />
        <Route path="/subscriptions" element={<Subscriptions />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}

export default App;
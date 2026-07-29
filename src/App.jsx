import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import PublicPage from "./pages/PublicPage";
import Contact from "./pages/Contact";
import PlansPage from "./pages/PlansPage";
import Shop from "./pages/Shop";

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
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/pages" element={<PublicPage title="Pages" />} />
      <Route path="/blog" element={<PublicPage title="Blog" />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/plans" element={<PlansPage />} />
      <Route path="/contacts" element={<Contact />} />

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

        <Route path="/admin/plans" element={<Plans />} />
        <Route path="/admin/plans/add" element={<AddPlan />} />
        <Route path="/admin/plans/edit/:id" element={<EditPlan />} />
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

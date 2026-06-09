import { Routes, Route } from "react-router-dom";
import Login from "../pages/auth/Login";
import AdminLayout from "../layouts/AdminLayout";
import Dashboard from "../pages/admin/Dashboard";
import Orders from "../pages/admin/Orders";
import CashierDashboard from "../pages/cashier/Dashboard";
import CashierLayout from "../layouts/CashierLayout";
import CreateOrder from "../pages/cashier/CreateOrder";
import Payment from "../pages/cashier/Payment";
import Invoice from "../pages/cashier/Invoice";
import OrderHistory from "../pages/cashier/OrderHistory";
import MenuManagement from "../pages/admin/MenuManagement";
import Reports from "../pages/admin/Reports";
import Settings from "../pages/admin/Settings";
import { Navigate } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="orders" element={<Orders />} />
        <Route path="/admin/menu" element={<MenuManagement />} />
        <Route path="/admin/reports" element={<Reports />} />
        <Route path="/admin/settings" element={<Settings />} />
      </Route>
      <Route path="/cashier" element={<CashierLayout />}>
        <Route path="dashboard" element={<CashierDashboard />} />
        <Route path="create-order" element={<CreateOrder />} />
        <Route path="/cashier/payment" element={<Payment />}/>
        <Route path="/cashier/invoice" element={<Invoice />}/>
        <Route path="/cashier/order-history" element={<OrderHistory />}/>
      </Route>
    </Routes>

    

  );
};

export default AppRoutes;
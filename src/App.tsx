import { Button } from "@/components/ui/button"
import Dashboard from "./app/dashboard/page"
import Estimates from "./app/estimate_histories/page"
import { Routes, Route, Navigate } from "react-router-dom";
// import Page from "./app/dashboard/page"
import OrderStatusPage from "./components/order-status"
import SettingsPage from "./components/settings"
import LoginPage from "./components/login"
import "./app/globals.css"
import { EstimateDetail } from "./app/estimate_detail/page";
import UserList from "./app/user_list/page";
import OrderList from "./app/order_list/page";

function App() {
  return (
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/estimates" element={<Estimates />} />
        <Route path="/estimates/detail" element={<EstimateDetail />} />
        <Route path="/order-status" element={<OrderStatusPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/orders" element={<OrderList />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
  )
}

export default App

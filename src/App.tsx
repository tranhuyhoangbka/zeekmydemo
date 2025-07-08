import { BrowserRouter, Routes, Route } from "react-router-dom"
import Page from "./app/dashboard/page"
import OrderStatusPage from "./components/order-status"
import SettingsPage from "./components/settings"
import LoginPage from "./components/login"
import "./app/globals.css"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/order-status" element={<OrderStatusPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

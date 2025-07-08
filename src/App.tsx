import { Button } from "@/components/ui/button"
import Dashboard from "./app/dashboard/page"
import Estimates from "./app/estimate_histories/page"
import { Routes, Route, Navigate } from "react-router-dom";
import "./app/globals.css"
import { EstimateDetail } from "./app/estimate_detail/page";


function App() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <Routes>
        {/* public routes */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/estimates" element={<Estimates />} />
        <Route path="/estimates/detail" element={<EstimateDetail />} />

        {/* protected routes */}
   

        {/* fallback nếu không khớp bất kỳ route nào */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  )
}

export default App
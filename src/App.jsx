import { Route, Routes } from "react-router-dom"
import { Login } from "./pages/auth/Login"
import { Register } from "./pages/auth/Register"
import { Dashboard } from "./pages/Dashboard"
import { Logout } from "./pages/auth/Logout"
import { Me } from "./pages/auth/Me"
import { Ticket } from "./pages/Ticket"



function App() {

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/me" element={<Me />} />
      <Route path="/ticket" element={<Ticket />} />
      <Route path="/" element={<Dashboard />} />
    </Routes>
  )
}

export default App

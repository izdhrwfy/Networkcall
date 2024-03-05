import { Routes, Route } from "react-router-dom";
import Register from "./pages/register";
import User from "./pages/user";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </>
  )
}

export default App

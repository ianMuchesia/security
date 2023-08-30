import { BrowserRouter, Route, Routes } from "react-router-dom";
import Verify from "./pages/Verify";

export default function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="user/verify-email" element={<Verify/>}/>
   </Routes>
   </BrowserRouter>
  )
}
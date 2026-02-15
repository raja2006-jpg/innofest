// import { Route } from "lucide-react";
import EventPage from "./Event";
import HomePage from "./Home";
// import HomePage from "@/components/HomePage";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from "./NavBar";

function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/events" element={<EventPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    </Router>
  );
}

export default App;

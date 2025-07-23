// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import AmenitiesPage from "./pages/AmenitiesPage";
import RoomsPage from "./pages/RoomsPage";
import ContactPage from "./pages/ContactPage";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/amenities" element={<AmenitiesPage />} />
                <Route path="/rooms" element={<RoomsPage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;

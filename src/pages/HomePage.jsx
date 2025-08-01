import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import Booking from "../components/Booking.jsx";
import About from "../components/About.jsx";
import Testimonials from "../components/Testimonials.jsx";


function Homepage() {
    return (
        <div className="font-sans">
            <Hero />
            <About />
            <Booking />
            <Testimonials />
        </div>
    );
}

export default Homepage;

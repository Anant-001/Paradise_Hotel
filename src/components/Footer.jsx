const Footer = () => (
    <footer id="contact" className="bg-[#A455E2] text-white py-10 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 text-sm sm:text-base">
            {/* Column 1 */}
            <div>
                <img src="./public/Logo.jpeg" alt="logo" className="h-20" />
            </div>

            {/* Column 2 */}
            <div>
                <h4 className="font-semibold mb-2">Quick Link</h4>
                <ul className="space-y-1">
                    <li><a href="#home" className="hover:underline">Home</a></li>
                    <li><a href="#about" className="hover:underline">About</a></li>
                    <li><a href="#rooms" className="hover:underline">Rooms</a></li>
                    <li><a href="#amenities" className="hover:underline">Amenities</a></li>
                </ul>
            </div>

            {/* Column 3 */}
            <div>
                <h4 className="font-semibold mb-2">Follow Us</h4>
                <ul className="space-y-1">
                    <li><a href="#" className="hover:underline">Instagram</a></li>
                    <li><a href="#" className="hover:underline">Facebook</a></li>
                    <li><a href="#" className="hover:underline">Linkedin</a></li>
                </ul>
            </div>

            {/* Column 4 */}
            <div>
                <h4 className="font-semibold mb-2">Contacts Us</h4>
                <p>Paradise Road, Hillview City</p>
                <p>91 98765 43210</p>
                <p>ontact@hotelparadize.com</p>
            </div>
        </div>

        <div className="text-left text-xs sm:text-sm mt-10 max-w-6xl mx-auto">
            <p>&copy; 2025 Hotel Paradize. All rights reserved.</p>
        </div>
    </footer>
);

export default Footer;

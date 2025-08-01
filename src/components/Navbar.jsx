import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { Menu, X } from "lucide-react"; // icons

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-[#A67BFB] text-white px-4 py-3 flex justify-between items-center md:px-6 relative">
            <div className="flex items-center gap-3">
                <img src="./public/Logo.jpeg" alt="logo" className="h-10" />
                <span className="text-xl font-bold hidden sm:inline">Hotel Paradize</span>
            </div>

            {/* Desktop menu */}
            <ul className="hidden md:flex gap-6 text-lg items-center">
                <li>
                    <NavLink to="/" className={({ isActive }) => isActive ? "underline" : ""}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/amenities" className={({ isActive }) => isActive ? "underline" : ""}>
                        Amenities
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/rooms" className={({ isActive }) => isActive ? "underline" : ""}>
                        Rooms
                    </NavLink>
                </li>
                <li>
                    <a href="#contact" className="hover:underline">Contact</a>
                </li>
                <li>
                    <SignedOut>
                        <SignInButton>
                            <button className="bg-black text-white px-4 py-2 rounded-full">Sign In</button>
                        </SignInButton>
                    </SignedOut>
                    <SignedIn>
                        <UserButton afterSignOutUrl="/" />
                    </SignedIn>
                </li>
            </ul>

            {/* Mobile menu toggle button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden z-20"
            >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Mobile menu panel */}
            {isOpen && (
                <div className="absolute top-full left-0 w-full bg-[#A67BFB] text-white flex flex-col items-start gap-4 px-6 py-4 md:hidden z-10 shadow-lg">
                    <NavLink to="/" onClick={() => setIsOpen(false)} className="w-full">
                        Home
                    </NavLink>
                    <NavLink to="/amenities" onClick={() => setIsOpen(false)} className="w-full">
                        Amenities
                    </NavLink>
                    <NavLink to="/rooms" onClick={() => setIsOpen(false)} className="w-full">
                        Rooms
                    </NavLink>
                    <a href="#contact" onClick={() => setIsOpen(false)} className="w-full">
                        Contact
                    </a>
                    <div className="w-full">
                        <SignedOut>
                            <SignInButton>
                                <button className="bg-black text-white px-4 py-2 rounded-full w-full text-left">
                                    Sign In
                                </button>
                            </SignInButton>
                        </SignedOut>
                        <SignedIn>
                            <UserButton afterSignOutUrl="/" />
                        </SignedIn>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

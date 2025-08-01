import React from "react";
import heroImage from "/pool.png";// Ensure this image is placed inside the `public` folder

const Hero = () => (
    <section
        className="h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${heroImage})` }}
    >
        <div
            className="bg-white/30 backdrop-blur-xl border border-white/20 shadow-2xl p-10 rounded-2xl text-center max-w-2xl transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,255,255,0.7)] hover:scale-105"
        >
            <h1 className="text-4xl md:text-5xl font-semibold text-black mb-4 drop-shadow-sm">
                Welcome to Hotel Paradises
            </h1>
            <p className="text-lg md:text-xl text-gray-900 mb-6 drop-shadow-sm">
                Luxury, Comfort, and Serenity
            </p>
            <a
                href="#rooms"
                className="bg-white/80 border border-white/30 px-6 py-2 rounded-full text-black font-medium hover:bg-white hover:text-gray-800 transition shadow-md"
            >
                Book Now
            </a>
        </div>

    </section>
);

export default Hero;

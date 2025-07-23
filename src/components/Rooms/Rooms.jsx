// src/components/Rooms.jsx
import React from "react";

const rooms = [
    { name: "Deluxe Room", price: "₹1990/night" },
    { name: "Suite Paradise", price: "₹2990/night" },
    { name: "Sea View Room", price: "₹3990/night" },
];

const Rooms = () => {
    return (
        <section className="bg-green-400 py-16 px-4 text-center overflow-hidden">
            <h2 className="text-3xl font-semibold text-white mb-10">Our Rooms</h2>
            <div className="scroll-wrapper">
                <div className="scroll-loop">
                    {[...rooms, ...rooms, ...rooms].map((room, index) => (
                        <div
                            key={index}
                            className="scroll-card"
                        >
                            <div>{room.name}</div>
                            <div className="text-xl font-bold mt-1">{room.price}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Rooms;

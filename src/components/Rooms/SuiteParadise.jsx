// src/components/DeluxeRooms.jsx
import React, { useState } from "react";

const rooms = [
    {
        title: "Taj Falaknuma Palace",
        location: "Hyderabad, Telangana",
        price: "₹3000",
        tags: ["Adventurous", "City"],
        image: "./public/SProom/room1.png",
    },
    {
        title: "Taj Falaknuma Palace,",
        location: " Falaknuma, Hyderabad, Telangana",
        price: "₹7999",
        tags: ["Sea", "Budget"],
        image: "./public/SProom/room2.png",
    },
    {
        title: "Taj Palace",
        location: "Chanakyapuri, New Delhi",
        price: "₹8700",
        tags: ["Luxury", "Pool"],
        image: "./public/SProom/room3.png",
    },
    {
        title: "CLARENS HOTEL ",
        location: "Gurugram, Haryana",
        price: "₹6999",
        tags: ["Excellent", "Adventurous"],
        image: "./public/SProom/room4.png",
    },
];

const tagColors = {
    Mountains: "bg-green-100 text-green-700",
    City: "bg-purple-100 text-purple-700",
    "Solo travel": "bg-blue-100 text-blue-700",
    Budget: "bg-indigo-100 text-indigo-700",
    Luxury: "bg-pink-100 text-pink-700",
    Beach: "bg-sky-100 text-sky-700",
    Sports: "bg-orange-100 text-orange-700",
    Adventurous: "bg-rose-100 text-rose-700",
};

const SuiteParadise = () => {
    const [selectedRoom, setSelectedRoom] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        checkIn: "",
        checkOut: "",
    });
    const [successMsg, setSuccessMsg] = useState("");

    const openModal = (room) => {
        setSelectedRoom(room);
        setFormData({ name: "", email: "", checkIn: "", checkOut: "" });
        setSuccessMsg("");
    };

    const closeModal = () => {
        setSelectedRoom(null);
        setSuccessMsg("");
    };

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleBooking = () => {
        const { name, email, checkIn, checkOut } = formData;
        if (!name || !email || !checkIn || !checkOut) {
            alert("Please fill out all fields!");
            return;
        }

        const bookingData = {
            room: selectedRoom.title,
            location: selectedRoom.location,
            price: selectedRoom.price,
            ...formData,
            id: Date.now(),
        };

        // Store in localStorage
        const existing = JSON.parse(localStorage.getItem("bookings")) || [];
        existing.push(bookingData);
        localStorage.setItem("bookings", JSON.stringify(existing));

        setSuccessMsg("✅ Booking successful!");
    };

    return (
        <section className="py-16 px-4 bg-white text-center">
            <h2 className="text-3xl font-semibold mb-10 text-gray-800">Suite Paradise</h2>
            <div className="flex flex-wrap justify-center gap-6">
                {rooms.map((room, index) => (
                    <div
                        key={index}
                        className="w-[250px] bg-white rounded-xl shadow-md overflow-hidden transition hover:shadow-lg"
                    >
                        <div className="relative h-[180px]">
                            <img
                                src={room.image}
                                alt={room.title}
                                className="w-full h-full object-cover"
                            />
                            <span className="absolute top-2 right-2 bg-white text-sm px-3 py-1 rounded-full shadow font-semibold">
                {room.price}
              </span>
                        </div>
                        <div className="p-4 text-left">
                            <h3 className="font-semibold text-lg">{room.title}</h3>
                            <p className="text-sm text-gray-500 mb-3 flex items-center gap-1">
                                <span>📍</span> {room.location}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-3">
                                {room.tags.map((tag, idx) => (
                                    <span
                                        key={idx}
                                        className={`text-xs font-medium px-3 py-1 rounded-full ${tagColors[tag] || "bg-gray-100 text-gray-700"}`}
                                    >
                    {tag}
                  </span>
                                ))}
                            </div>
                            <button
                                onClick={() => openModal(room)}
                                className="mt-2 w-full bg-blue-600 text-white py-1.5 rounded hover:bg-blue-700 transition"
                            >
                                Book Now
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {selectedRoom && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center p-4">
                    <div className="bg-white rounded-xl shadow-lg max-w-md w-full p-6 relative">
                        <button
                            className="absolute top-2 right-3 text-xl font-bold text-gray-500 hover:text-red-500"
                            onClick={closeModal}
                        >
                            ×
                        </button>
                        <img
                            src={selectedRoom.image}
                            alt={selectedRoom.title}
                            className="w-full h-48 object-cover rounded-md mb-4"
                        />
                        <h3 className="text-2xl font-semibold mb-1">{selectedRoom.title}</h3>
                        <p className="text-sm text-gray-500 mb-2">📍 {selectedRoom.location}</p>
                        <p className="mb-3 text-gray-600">{selectedRoom.description}</p>
                        <p className="text-lg font-bold mb-4">{selectedRoom.price}/night</p>

                        {/* Form Fields */}
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full mb-2 px-4 py-2 border rounded"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full mb-2 px-4 py-2 border rounded"
                        />
                        <div className="flex gap-2 mb-2">
                            <input
                                type="date"
                                name="checkIn"
                                value={formData.checkIn}
                                onChange={handleChange}
                                className="w-1/2 px-4 py-2 border rounded"
                            />
                            <input
                                type="date"
                                name="checkOut"
                                value={formData.checkOut}
                                onChange={handleChange}
                                className="w-1/2 px-4 py-2 border rounded"
                            />
                        </div>

                        <button
                            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
                            onClick={handleBooking}
                        >
                            Confirm Booking
                        </button>

                        {successMsg && (
                            <p className="text-green-600 font-medium mt-3">{successMsg}</p>
                        )}
                    </div>
                </div>
            )}
        </section>
    );
};

export default SuiteParadise;
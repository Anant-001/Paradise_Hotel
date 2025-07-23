import React, { useEffect, useState } from "react";

const AdminDashboard = () => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("bookings")) || [];
        setBookings(stored);
    }, []);

    const clearBookings = () => {
        if (window.confirm("Are you sure you want to delete all bookings?")) {
            localStorage.removeItem("bookings");
            setBookings([]);
        }
    };

    return (
        <section className="p-6 bg-gray-100 min-h-screen">
            <h2 className="text-3xl font-bold mb-6 text-center">📋 Booking Dashboard</h2>

            {bookings.length === 0 ? (
                <p className="text-center text-gray-500">No bookings yet.</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border rounded-lg overflow-hidden shadow">
                        <thead className="bg-blue-600 text-white">
                        <tr>
                            <th className="p-3 text-left">#</th>
                            <th className="p-3 text-left">Name</th>
                            <th className="p-3 text-left">Email</th>
                            <th className="p-3 text-left">Room</th>
                            <th className="p-3 text-left">Location</th>
                            <th className="p-3 text-left">Price</th>
                            <th className="p-3 text-left">Check-In</th>
                            <th className="p-3 text-left">Check-Out</th>
                        </tr>
                        </thead>
                        <tbody>
                        {bookings.map((b, i) => (
                            <tr
                                key={b.id}
                                className={`${i % 2 === 0 ? "bg-white" : "bg-gray-50"} border-b`}
                            >
                                <td className="p-3">{i + 1}</td>
                                <td className="p-3">{b.name}</td>
                                <td className="p-3">{b.email}</td>
                                <td className="p-3">{b.room}</td>
                                <td className="p-3">{b.location}</td>
                                <td className="p-3">{b.price}</td>
                                <td className="p-3">{b.checkIn}</td>
                                <td className="p-3">{b.checkOut}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    <div className="mt-6 text-center">
                        <button
                            onClick={clearBookings}
                            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded shadow"
                        >
                            🗑️ Clear All Bookings
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default AdminDashboard;

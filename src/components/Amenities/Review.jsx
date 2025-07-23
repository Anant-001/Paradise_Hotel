// src/components/Review.jsx
import React from "react";
import {
    LineChart,
    Line,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
} from "recharts";

const userData = [
    { name: "Jan", users: 2300 },
    { name: "Feb", users: 1800 },
    { name: "Mar", users: 3000 },
    { name: "Apr", users: 1700 },
    { name: "May", users: 2000 },
    { name: "Jun", users: 1900 },
];

const serviceData = [
    { name: "Beach", value: 50 },
    { name: "Cultural", value: 10 },
    { name: "City", value: 30 },
    { name: "Nature", value: 20 },
    { name: "Culinary", value: 40 },
    { name: "Relax", value: 10 },
    { name: "Adventure", value: 30 },
];

const Review = () => {
    return (
        <section className="px-4 py-16 bg-white text-gray-900">
            <h2 className="text-3xl font-semibold text-center mb-12">Review Insights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* User Growth Chart */}
                <div className="bg-white rounded-2xl shadow-lg p-4">
                    <h3 className="text-lg font-medium mb-4">User Growth</h3>
                    <ResponsiveContainer width="100%" height={250}>
                        <LineChart data={userData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis domain={[0, 3500]} />
                            <Tooltip />
                            <Bar dataKey="users" barSize={30} fill="#4F75FF" opacity={0.4} />
                            <Line type="monotone" dataKey="users" stroke="#4F75FF" strokeWidth={2} dot={{ r: 5 }} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>

                {/* Services at Time Chart */}
                <div className="bg-white rounded-2xl shadow-lg p-4">
                    <h3 className="text-lg font-medium mb-4">Services at Time</h3>
                    <ResponsiveContainer width="100%" height={250}>
                        <BarChart data={serviceData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis domain={[0, 60]} tickFormatter={(v) => `${v}%`} />
                            <Tooltip formatter={(val) => `${val}%`} />
                            <Bar dataKey="value" fill="#4F46E5" radius={[4, 4, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </section>
    );
};

export default Review;

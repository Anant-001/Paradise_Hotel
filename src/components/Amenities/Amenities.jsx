import React from "react";

const amenities = [
    "Swimming Pool",
    "Spa & Wellness",
    "Free Wi-Fi",
    "Sea View Rooms",
    "24/7 Room Service",
    "Restaurant & Bar",
    "Gym Access",
    "Laundry Service",
];

const Amenities = () => {
    return (
        <section className="py-16 px-4 text-white bg-green-400 overflow-hidden">
            <h2 className="text-3xl font-semibold mb-10 text-center">Our Amenities</h2>

            <div className="scroll-wrapper">
                <div className="scroll-loop">
                    {[...amenities, ...amenities].map((item, index) => (
                        <div key={index} className="scroll-card">
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Amenities;

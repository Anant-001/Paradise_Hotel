import React from "react";
import SpotlightCard from '/glow/SpotlightCard/SpotlightCard.jsx';
const showcaseData = [
    {
        title: "Swimming Pool",
        location: "23-Hour Fitness Center ,Gurgaon",
        tags: ["Pool", "City"],
        img: "./public/pool.png",
    },
    {
        title: "Spa & Wellness",
        location: "Inviting PoolSide Atmosphere,Goa",
        tags: ["Spa", "Budget"],
        img: "./public/Showimg/spa.png",
    },
    {
        title: "Sea View",
        location: "Yemen,Mumbai",
        tags: ["Luxury", "Beach"],
        img: "./public/Showimg/sea.png",
    },
    {
        title: "Services 24/7",
        location: "All Hotels",
        tags: ["Services", "Advices"],
        img: "./public/Showimg/Service.png",
    },
    {
        title: "Free Wi-Fi",
        location: "Hotels",
        tags: ["Services", "Wi-Fi"],
        img: "./public/Showimg/WiFi.png",
    },
];

const Showcase = () => {
    return (
        <section className="py-20 px-4 bg-gray-50">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Amenities</h2>


            <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
                <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 justify-items-center">
                    {showcaseData.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-xl overflow-hidden w-[240px] hover:scale-105 transition duration-300 cursor-pointer"
                        >
                            <img src={item.img} alt={item.title} className="h-40 w-full object-cover" />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                                <p className="text-sm text-gray-500 mt-1">📍 {item.location}</p>
                                <div className="mt-3 flex flex-wrap gap-2">
                                    {item.tags.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            className="bg-gray-100 text-sm text-gray-700 px-3 py-1 rounded-full"
                                        >
                    {tag}
                  </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </SpotlightCard>

        </section>
    );
};

export default Showcase;
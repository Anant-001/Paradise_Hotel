import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import roomImg from "/public/About.png"; // Update if needed
import mainImg from "/public/Swimming Pool.png"; // Update if needed

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const sectionRef = useRef(null);
    const headingRef = useRef(null);
    const descRef = useRef(null);
    const mainImgRef = useRef(null);
    const roomImgRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(headingRef.current, {
                y: 50,
                opacity: 0,
                duration: 0.8,
                scrollTrigger: {
                    trigger: headingRef.current,
                    start: "top 90%",
                },
            });

            gsap.from(descRef.current, {
                y: 30,
                opacity: 0,
                delay: 0.3,
                duration: 0.8,
                scrollTrigger: {
                    trigger: descRef.current,
                    start: "top 90%",
                },
            });

            gsap.from(mainImgRef.current, {
                scale: 0.95,
                opacity: 0,
                duration: 1,
                delay: 0.2,
                scrollTrigger: {
                    trigger: mainImgRef.current,
                    start: "top 85%",
                },
            });

            gsap.from(roomImgRef.current, {
                x: -100,
                opacity: 0,
                duration: 1,
                delay: 0.4,
                scrollTrigger: {
                    trigger: roomImgRef.current,
                    start: "top 85%",
                },
            });

            gsap.from(cardsRef.current, {
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="about"
            className="py-16 px-4 bg-accent text-center"
            ref={sectionRef}
        >
            <h3
                ref={headingRef}
                className="text-3xl sm:text-4xl font-bold mb-4 text-black"
            >
                About Us
            </h3>
            <p
                ref={descRef}
                className="max-w-3xl mx-auto text-base sm:text-lg text-gray-700"
            >
                Nestled in the heart of nature, Hotel Paradize offers a tranquil escape
                with top-notch hospitality, elegant rooms, and world-class amenities for
                a memorable stay.
            </p>

            <section id="features" className="bg-[#A75966] py-16 px-4 mt-10">
                {/* Top Banner Image */}
                <div className="flex justify-center mb-10">
                    <img
                        ref={mainImgRef}
                        src={mainImg}
                        alt="Hotel View"
                        className="rounded-md w-full max-w-4xl object-cover"
                    />
                </div>

                {/* Main Content */}
                <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
                    {/* Left Side Image */}
                    <div
                        ref={roomImgRef}
                        className="w-full sm:w-[250px] h-[300px] rounded-3xl overflow-hidden shadow-lg"
                    >
                        <img
                            src={roomImg}
                            alt="Room Interior"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Feature Cards */}
                    <div className="flex gap-[20px] items-end overflow-x-auto">
                        {[
                            {
                                title: "Our Rooms",
                                desc: "Indulge in the ultimate comfort and style in our meticulously designed rooms.",
                                bg: "#C15454",
                                top: "#709C7D",
                            },
                            {
                                title: "Our Amenities",
                                desc: "Elevate your stay with our exceptional amenities.",
                                bg: "#A54CE5",
                                top: "#606CDC",
                            },
                            {
                                title: "Stay Connected",
                                desc: "Enjoy seamless connectivity and stay connected with our high-speed Wi-Fi.",
                                bg: "#383CFF",
                                top: "#FF4D4D",
                            },
                        ].map((card, i) => (
                            <div
                                key={i}
                                ref={(el) => (cardsRef.current[i] = el)}
                                className={`h-[${200 + i * 100}px] w-[180px] sm:w-[200px] bg-[${card.bg}] rounded-t-xl shadow-lg flex-shrink-0`}
                            >
                                <div
                                    className={`bg-[${card.top}] h-[60px] w-full rounded-b-[100%] flex justify-center items-end`}
                                >
                                    <h3 className="text-base sm:text-lg font-semibold text-black mb-2 text-center px-1">
                                        {card.title}
                                    </h3>
                                </div>
                                <div className="p-4 text-center text-black text-sm">
                                    {card.desc}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </section>
    );
};

export default About;

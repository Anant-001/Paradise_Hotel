import TextType from "../../text/TextType/TextType.jsx"
import roomImage from "/public/room.png"; // use Booking.png or replace with your own
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Booking = () => {
    const sectionRef = useRef(null);
    const imageRef = useRef(null);
    const textRef = useRef(null);
    const titleRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(titleRef.current, {
                y: 50,
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: "top 80%",
                },
            });

            gsap.from(imageRef.current, {
                x: -100,
                opacity: 0,
                duration: 1,
                delay: 0.2,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 85%",
                },
            });

            gsap.from(textRef.current, {
                x: 100,
                opacity: 0,
                duration: 1,
                delay: 0.3,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 85%",
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="bg-[#A54CE5] px-4 py-12 sm:px-6 md:px-10 lg:px-20 text-center text-black"
        >
            {/* Top Text */}
            <div className="mb-10">
                <h2 ref={titleRef} className="text-2xl sm:text-3xl font-bold">
                    Get in Touch
                </h2>
                <p className="mt-3 max-w-xl mx-auto text-base sm:text-lg">
                    For any inquiries or reservations, please don't hesitate to reach out to our dedicated team
                </p>
            </div>

            {/* Content Flex */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
                {/* Image */}
                <div
                    ref={imageRef}
                    className="w-full lg:w-[45%] rounded-3xl overflow-hidden shadow-lg"
                >
                    <img
                        src={roomImage}
                        alt="Hotel Room"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Text */}
                <div
                    ref={textRef}
                    className="text-center lg:text-left w-full lg:w-[50%] mt-6 lg:mt-0"
                >
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                        Explore Our Rooms
                    </h2>

                    <TextType
                        text={["Discover our meticulously designed rooms, each offering a perfect blend of comfort, style, and modern amenities. From cozy retreats to luxurious suites."]}
                        typingSpeed={75}
                        pauseDuration={1500}
                        showCursor={true}
                        cursorCharacter="|"
                        className="text-base sm:text-lg mb-6 leading-relaxed px-2 sm:px-0"
                    />
                    <button className="bg-white text-black font-semibold px-6 py-2 rounded-md hover:bg-gray-100 transition">
                        Book now
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Booking;

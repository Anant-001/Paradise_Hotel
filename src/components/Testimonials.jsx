const testimonials = [
    {
        name: "Amit Sharma",
        text: "An unforgettable experience. The views and service are amazing!",
    },
    {
        name: "Sophia D",
        text: "So peaceful and luxurious. Highly recommended!",
    },
];

const stats = [
    {
        title: "Total Guests",
        value: "12,450",
        change: "+12%",
        color: "text-green-500",
        note: "vs last month",
        chartColor: "from-green-100 to-white",
    },
    {
        title: "Register Booking Guest",
        value: "3,210",
        change: "-2%",
        color: "text-red-500",
        note: "vs last month",
        chartColor: "from-red-100 to-white",
    },
    {
        title: "Active Today Guests",
        value: "12,450",
        change: "+12%",
        color: "text-green-500",
        note: "vs last month",
        chartColor: "from-green-100 to-white",
    },
];

const Testimonials = () => (
    <section className="py-20 px-4 bg-[#121212] text-center">
        <h3 className="text-3xl font-bold text-white mb-10">Guest Testimonials</h3>

        {/* Testimonials */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
            {testimonials.map((t, i) => (
                <div
                    key={i}
                    className="bg-[#72FFD4] text-black px-6 py-4 rounded-lg max-w-xs text-left"
                >
                    <p className="text-md mb-2">"{t.text}"</p>
                    <h5 className="text-sm font-semibold">— {t.name}</h5>
                </div>
            ))}
        </div>

        {/* Stats Cards */}
        <div className="flex flex-wrap justify-center gap-6">
            {stats.map((stat, idx) => (
                <div
                    key={idx}
                    className="bg-white rounded-xl shadow-md p-6 w-72 text-left"
                >
                    <h5 className="text-sm text-gray-500">{stat.title}</h5>
                    <h2 className="text-3xl font-bold text-gray-900">{stat.value}</h2>
                    <div className="flex items-center gap-2 mt-2">
            <span className={`text-sm font-medium ${stat.color}`}>
              {stat.change}
            </span>
                        <span className="text-xs text-gray-500">{stat.note}</span>
                    </div>
                    {/* Placeholder for chart graphic */}
                    <div
                        className={`h-10 mt-4 bg-gradient-to-r ${stat.chartColor} rounded-lg`}
                    />
                </div>
            ))}
        </div>
    </section>
);

export default Testimonials;

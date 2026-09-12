import Banner from "../assets/banner-stack.png";

const Hero = () => {
    return (
        <section className="w-[85%] max-w-300 mx-auto mt-14">
            <div className="flex items-center justify-between gap-10">

                {/* Left Side */}
                <aside className="w-1/2">

                    <h1 className="text-[34px] font-bold leading-[1.05] text-[#111827]">
                        Build Your Ideal
                        <br />

                        <span className="bg-linear-to-r from-[#ff4d35] to-[#a02be8] bg-clip-text text-transparent">
                            Development Stack
                        </span>
                    </h1>

                    <p className="text-[13px] text-gray-500 leading-5 mt-4 max-w-112.5">
                        Explore frontend, backend, database, and tooling options,
                        compare them side by side, and put together the stack that fits your
                        next project.
                    </p>

                    {/* Buttons */}
                    <div className="flex gap-2 mt-7">

                        <button
                            type="button"
                            className="px-3 py-2 text-[10px] text-white rounded-md
                            bg-linear-to-r from-[#ff6b35] to-[#e83e8c]
                            hover:scale-105 transition duration-300"
                        >
                            Explore Technologies
                        </button>

                        <button
                            type="button"
                            className="px-7 py-2 text-[10px] text-gray-600
                            border border-gray-200 rounded-md
                            hover:bg-gray-100 transition duration-300"
                        >
                            Learn More
                        </button>

                    </div>
                </aside>


                {/* Right Side */}
                <aside className="w-1/2 flex justify-center">
                    <img
                        src={Banner}
                        alt="Development Stack"
                        className="w-70 h-auto object-contain"
                    />
                </aside>

            </div>
        </section>
    );
};

export default Hero;
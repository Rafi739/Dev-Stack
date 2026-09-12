import Banner from "../assets/banner-stack.png";

const Hero = () => {
    return (
        <section className="w-[90%] max-w-7xl mx-auto pt-12">
            <div className="flex min-h-115 items-center justify-between gap-16">

               
                <aside className="w-1/2">

                    <h1 className="text-[50px] font-bold leading-[1.08] text-[#111827]">
                        Build Your Ideal
                        <br />

                        <span className="bg-linear-to-r from-[#ff4d35] to-[#a02be8] bg-clip-text text-transparent">
                            Development Stack
                        </span>
                    </h1>

                    <p className="mt-6 max-w-xl text-[16px] leading-7 text-gray-500">
                        Explore frontend, backend, database, and tooling options,
                        compare them side by side, and put together the stack that
                        fits your next project.
                    </p>

                   
                    <div className="mt-8 flex gap-4">

                        <button type="button" className="cursor-pointer rounded-md bg-linear-to-r from-[#ff6b35] to-[#e83e8c] px-7 py-3.5 text-[13px] font-medium text-white shadow-sm transition duration-300 hover:scale-105" >
                            Explore Technologies
                        </button>

                        <button type="button" className="cursor-pointer rounded-md border border-gray-200 px-8 py-3.5 text-[13px] text-gray-600 transition duration-300 hover:bg-gray-100" >
                            Learn More
                        </button>

                    </div>
                </aside>

                <aside className="flex w-1/2 justify-center">
                    <img src={Banner} alt="Development Stack" className="w-107.5 h-auto object-contain" />
                </aside>

            </div>
        </section>
    );
};

export default Hero;
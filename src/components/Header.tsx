import logo from "../assets/logo-text.png";

const Header = () => {
    return (
        <div className="border-b sticky top-0 z-50 border-gray-100 bg-white">
            <nav className="flex h-12 w-[90%] max-w-6xl mx-auto items-center justify-between">

                <img src={logo} alt="Dev Stack" className="w-19.5" />

                <ul className="flex items-center gap-5 text-[10px] font-medium">
                    <li>
                        <a href="#" className="text-[#D91B7E]">Home </a>
                    </li>

                    <li>
                        <a href="#" className="text-gray-500 hover:text-[#D91B7E] transition"> Technologies </a>
                    </li>

                    <li>
                        <a href="#" className="text-gray-500 hover:text-[#D91B7E] transition"> Projects </a>
                    </li>

                    <li>
                        <a href="#" className="text-gray-500 hover:text-[#D91B7E] transition"> About </a>
                    </li>

                    <li>
                        <a href="#" className="text-gray-500 hover:text-[#D91B7E] transition"> Contact </a>
                    </li>
                </ul>

                <div className="flex items-center gap-4 text-[10px]">
                    <button className="text-gray-600 hover:text-gray-900 transition"> Sign In </button>

                    <button className=" rounded-full bg-[#D91B7E] px-4 py-1.5 text-white transition-all duration-300 hover:bg-[#A91461] hover:scale-105 ">
                         Sign Up
                    </button>
                </div>

            </nav>
        </div>
    );
};

export default Header;
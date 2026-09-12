import logo from "../assets/logo-text.png";

const Header = () => {
    return (
        <div className="sticky top-0 z-50 border-b border-gray-100 bg-white">
            <nav className="flex h-16 w-[90%] max-w-76xl mx-auto items-center justify-between">

            
                <img src={logo} alt="Dev Stack" className="w-24" />

              
                <ul className="flex items-center gap-8 text-[13px] font-medium">
                    <li>
                        <a href="#" className="text-[#D91B7E] transition"> Home </a>
                    </li>

                    <li>
                        <a href="#" className="text-gray-500 transition hover:text-[#D91B7E]"> Technologies</a>
                    </li>

                    <li>
                        <a href="#" className="text-gray-500 transition hover:text-[#D91B7E]"> Projects </a>
                    </li>

                    <li>
                        <a href="#" className="text-gray-500 transition hover:text-[#D91B7E]" > About </a>
                    </li>

                    <li>
                        <a href="#" className="text-gray-500 transition hover:text-[#D91B7E]" > Contact </a>
                    </li>
                </ul>

              
                <div className="flex items-center gap-6 text-[13px]">

                    <button className="cursor-pointer text-gray-600 transition hover:text-gray-900"> Sign In </button>
                    <button className="cursor-pointer rounded-full bg-[#D91B7E] px-5 py-2 text-white transition-all duration-300 hover:scale-105 hover:bg-[#A91461]" > Sign Up </button>
                    
                </div>

            </nav>
        </div>
    );
};

export default Header;
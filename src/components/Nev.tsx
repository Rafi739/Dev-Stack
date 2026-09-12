import logo from "../assets/logo-text.png";



const Nev = () => {
    return (
        <div className="border-b border-gray-100">

            <nav className="flex justify-between items-center gap-4 w-[90%] mx-auto">
                <img src={logo} alt="logo" />

                <ul className="flex justify-between gap-4">
                    <li>Home</li>
                    <li>Technologies</li>
                    <li>Projects</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>

                <div className="flex justify-between gap-4">
                    <button>Sign in</button>
                    <button className="bg-[#D91B7E] px-5 py-2 rounded-full text-white
hover:bg-[#A91461] hover:scale-105
transition-all duration-300 ease-in-out">
                        Sign out
                    </button>        </div>

            </nav>

        </div>
    )
}


export default Nev
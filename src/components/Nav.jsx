import { useState } from "react";

function Nav() {

    const [navTogggle, setNavToggle] = useState(false)

    const toggleNav = () => {
        setNavToggle(prev => !prev)
    }

    return (
            <nav className="fixed bg-blue-500 p-4 w-full z-50 left-0 top-0">
                <div className="container mx-auto w-full flex justify-between items-center">
                    <div className="text-white font-bold text-xl">Logo</div>
                    <div className="block lg:hidden">
                        <button className="text-white focus:outline-none peer" onClick={toggleNav}>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </button>
                    </div>
                    <div className={(navTogggle ? "-translate-x-0 " : "-translate-x-full ") + 
                                    "transform fixed origin-top top-14 left-0 lg:-translate-x-0 lg:static lg:flex lg:items-center lg:w-auto w-full bg-blue-500 overflow-hidden transition-transform duration-300 ease-in-out"}>
                        <ul className="lg:flex lg:justify-between lg:items-center lg:space-x-4 text-white">
                            <li><a href="#" className="block py-4 border-b border-t lg:p-0 text-center lg:border-0 hover:text-yellow-400">Home</a></li>
                            <li><a href="#" className="block py-4 border-b lg:p-0 text-center lg:border-0 hover:text-yellow-400">About</a></li>
                            <li><a href="#" className="block py-4 border-b lg:p-0 text-center lg:border-0 hover:text-yellow-400">Services</a></li>
                            <li><a href="#" className="block py-4 border-b lg:p-0 text-center lg:border-0 hover:text-yellow-400">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
    )
}

export default Nav;
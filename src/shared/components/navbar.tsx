import { useState } from "react";
import {Link} from "react-router";

const Navbar = ({ active }: { active: string }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navItems = [
        { name: "Movies", id: "movies" },
        { name: "Series", id: "series" },
        { name: "Actores", id: "characters" },
    ];

    return (
        <nav className="navbar z-50 bg-black/60 fixed w-full backdrop-blur-lg border-b border-white/10 text-neutral-50">
            <div className="max-w-7xl grid grid-cols-3  mx-auto px-4 h-16  items-center justify-between">
                <Link to={'/'} className="text-3xl text-center w-50 text-red-500 hover:bg-red-500 hover:text-neutral-50 transition-colors duration-300 p-1 cursor-pointer   font-black cursor-pointershrink-0">
                    MARVEL
                </Link>

                {/* Desktop Menu  */}
                <div className="hidden col-start-2 place-self-center  min-[900px]:flex items-center gap-8 flex-1 justify-center">
                    <ul className="flex w-full  gap-8 font-bold">
                        {navItems.map((item) => (
                            <Link to={'/' + item.id}
                                key={item.id}
                                className={`${
                                    active === item.id 
                                        ? "border-b-2 border-red-600 hover:text-red-500 transition-colors " 
                                        : "hover:text-red-500 transition-colors"
                                } cursor-pointer pb-1`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </ul>
                </div>



                {/* Burger Button */}
                <div className="min-[900px]:hidden col-start-3 place-self-center mt-5 flex items-center">
                    <button
                        onClick={toggleMenu}
                        className="relative w-10 h-10 text-white focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-5">
                            <span
                                className={`absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                                    isOpen ? "rotate-45 translate-y-2" : "-translate-y-2"
                                }`}
                            ></span>
                            <span
                                className={`absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                                    isOpen ? "opacity-0" : "opacity-100"
                                }`}
                            ></span>
                            <span
                                className={`absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                                    isOpen ? "-rotate-45 translate-y-2" : "translate-y-2"
                                }`}
                            ></span>
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Menu - Dropdown */}
            <div
                className={`min-[900px]:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-white/5 bg-black/90 ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
            >
                <ul className="flex flex-col p-4 gap-4 font-bold text-center">
                    {navItems.map((item) => (
                        <Link to={'/' +item.id}
                            key={item.id}
                            className={`${
                                active === item.id ? "" : "text-red-500"
                            } cursor-pointer py-2 hover:bg-white/5 rounded-md transition-colors`}
                            onClick={() => setIsOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}

                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
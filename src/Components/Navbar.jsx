import logo from '../assets/logo-text.png'

const Navbar = () => {
    return (
        <>
            <div className='border-b border-gray-200 fixed top-0 left-0 right-0 bg-white'>
                <div className="container mx-auto flex items-center justify-center relative py-2 lg:min-h-16]">

                    <div className="absolute left-2 lg:static flex items-center justify-start lg:hidden">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={-1}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow z-[50px]">
                                <li><a>Home</a></li>
                                <li><a>Technologies</a></li>
                                <li><a>Project</a></li>
                                <li><a>About</a></li>
                                <li><a>Contact</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex justify-center lg:justify-start">
                        <img src={logo} alt="Logo" className="h-8 w-auto object-contain" />
                    </div>

                    <div className="hidden lg:flex flex-1 justify-center">
                        <ul className="menu menu-horizontal px-1 gap-4 font-medium">
                            <li className='text-[#DB2777]'><a>Home</a></li>
                            <li><a>Technologies</a></li>
                            <li><a>Project</a></li>
                            <li><a>About</a></li>
                            <li><a>Contact</a></li>
                        </ul>
                    </div>

                    <div className="absolute right-2 lg:static flex items-center justify-end gap-1 sm:gap-3">
                        <button className="btn bg-transparent outline-0 border-0 cursor-pointer text-xs sm:text-sm px-2">Sign in</button>
                        <button className="btn btn-secondary rounded-2xl cursor-pointer btn-xs sm:btn-md text-xs sm:text-base">Sign up</button>
                    </div>

                </div>
            </div>
        </>

    );
};

export default Navbar;
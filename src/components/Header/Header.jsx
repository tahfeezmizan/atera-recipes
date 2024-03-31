

const Header = () => {
    return (
        <div>
            <div className="navbar w-full lg:w-11/12 xl:w-8/12 mx-auto px-4 md:px-6 lg:px-0 py-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 space-y-2">
                            <li className="text-lg font-medium opacity-70">Home</li>
                            <li className="text-lg font-medium opacity-70">Recipes</li>
                            <li className="text-lg font-medium opacity-70">About</li>
                            <li className="text-lg font-medium opacity-70">Search</li>

                            <div className="flex items-center rounded-3xl bg-gray-100 pl-5 block md:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                </svg>
                                <input type="text" placeholder="Search" className=" input rounded-3xl bg-gray-100 w-20 md:w-auto" />
                            </div>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-3xl font-bold lexend">Atera <span className="text-green-600">Recipe</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-10">
                        <li className="text-lg font-medium opacity-70 hover:bg-transparent">Home
                        </li>
                        <li className="text-lg font-medium opacity-70 hover:bg-transparent">Recipes
                        </li>
                        <li className="text-lg font-medium opacity-70 hover:bg-transparent">About
                        </li>
                        <li className="text-lg font-medium opacity-70 hover:bg-transparent">Search
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="flex items-center gap-4">
                        <div className="items-center rounded-3xl bg-gray-100 pl-5 hidden md:flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                            <input type="text" placeholder="Search" className=" input rounded-3xl bg-gray-100 w-20 md:w-auto" />
                        </div>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 bg-green-400 rounded-full">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>

                    </div>
                </div>
            </div>
        </div >
    );
};

export default Header;
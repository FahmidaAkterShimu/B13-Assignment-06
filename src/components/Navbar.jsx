import React from 'react';

const Navbar = () => {
    return (
        <div className='border-b border-[#F2F2F2] md:py-2'>
            <div className="max-w-300 mx-auto navbar bg-base-100">

                <div className="navbar-start">
                    {/* for small device */}
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>

                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a>Products</a></li>
                            <li><a>Features</a></li>
                            <li><a>Pricing</a></li>
                            <li><a>Testimonials</a></li>
                            <li><a>FAQ</a></li>
                        </ul>
                    </div>

                    {/* logo */}
                    <a href="">
                        <img className='h-5 lg:h-full' src="DigiTools.png" alt="" />
                    </a>
                </div>

                {/* for large device */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-semibold text-base hover:rounded-full">
                        <li><a>Products</a></li>
                        <li><a>Features</a></li>
                        <li><a>Pricing</a></li>
                        <li><a>Testimonials</a></li>
                        <li><a>FAQ</a></li>
                    </ul>
                </div>


                <div className="navbar-end md:gap-2">
                    {/* cart */}
                    <div className="flex-none">
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                <div className="indicator">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
                                    {/* Badge */}
                                    <span className="badge badge-sm indicator-item rounded-full bg-red-600 p-1.5 text-white">0</span>
                                </div>
                            </div>
                            <div
                                tabIndex={0}
                                className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow">
                                <div className="card-body">
                                    <span className="text-lg font-bold">0 Items</span>
                                    {/* <span className="text-info">Subtotal: $999</span> */}
                                    <div className="card-actions">
                                        <button className="btn btn-primary btn-block">View cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* login btn */}
                    <button className='btn btn-ghost text-base font-semibold rounded-full'>
                        Login
                    </button>

                    {/* get started btn */}
                    <a className="btn hidden md:flex  bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full py-5">
                        Get Started
                    </a>
                </div>
            </div>

            {/* get started btn */}
            <a className="btn md:hidden flex bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full py-5 w-40 mx-auto mb-2">
                Get Started
            </a>

        </div>
    );
};

export default Navbar;


import { useState } from "react";
import { Bars3Icon, } from "@heroicons/react/24/outline";
import { Link, Outlet } from 'react-router-dom'
const UserCommon = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <>
            <div className="sticky top-0 backdrop-blur-sm h-[50px] justify-center content-center">
                <nav className="backdrop-blur-sm">
                    <div className="mx-auto max-w-7xl ">
                        <div className="flex justify-between mx-auto w-5/5 ">
                            <div className="flex items-center justify-between my-2 lg:justify-end gap-[40px]">
                                {/* <Link to=""> <img src={logo} alt="" className="h-[40px] w-[180px]" /></Link> */}
                                <div className="hidden gap-7 lg:flex">
                                    <Link to="">Home</Link>
                                    <Link to="">About</Link>
                                    <Link to="">Product</Link>
                                    <Link to="">Cart</Link>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="flex items-center lg:hidden">
                                    <button onClick={() => setToggleMenu(!toggleMenu)}>
                                        <Bars3Icon className="h-6" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`fixed z-40 w-full   overflow-auto flex flex-col lg:hidden gap-12  origin-top duration-700 ${!toggleMenu ? "h-0" : "h-auto"}`}>
                        <div className="px-4  bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 p-2 rounded-b-lg">
                            <div className="flex flex-col gap-8 font-bold tracking-wider ">
                                <Link to="" >Home</Link>
                                <Link to="">About</Link>
                                <Link to="">Product</Link>
                                <Link to="">Cart</Link>
                            </div>
                        </div>
                    </div>
                </nav>

            </div>
            <div>
                <Outlet />
            </div>
        </>
    )
}

export default UserCommon
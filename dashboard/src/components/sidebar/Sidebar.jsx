import React, { useEffect, useRef, useState } from 'react'
import {FiLogOut} from "react-icons/fi"
import {LuLogIn} from "react-icons/lu"
import {FaUserGear, FaUsersGear} from "react-icons/fa6";
import {RxDashboard} from "react-icons/rx";
import { Link } from 'react-router-dom';

const Sidebar = ({sidebarRef}) => {
       
    return (
        <aside 
            ref={sidebarRef} 
            id="logo-sidebar" 
            className="col-start-1 col-span-1 z-40 w-[250px] transition-[width] translate-x-0 rounded-se-[45px] rounded-ee-[250px] overflow-hidden sticky top-[66px] start-0 " 
            style={{height: "calc(100vh - 66px)"}}
            aria-label="Sidebar"
        >
            <div className="h-full px-3 py-4 overflow-y-auto bg-white">
                {/* <div className="flex items-center gap-3 mb-5">
                    <button className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </button>
                    <span className="flex-1 font-daysOne font-extrabold text-3xl text-white text-start">Aument</span>
                </div> */}
                <ul className="space-y-2 font-medium ">
                    <li>
                        <Link to="/dashboard" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                            <RxDashboard className="text-xl" />
                            <span className={`flex-1 ml-3 whitespace-nowrap`}>Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/companies" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">                  
                            <FaUsersGear className="text-xl" />
                            <span className="flex-1 ml-3 whitespace-nowrap">Companies</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/users" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                            <FaUserGear className="text-xl" />
                            <span className="flex-1 ml-3 whitespace-nowrap">Users</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/sign-in" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                            <LuLogIn className="text-xl" />
                            <span className="flex-1 ml-3 whitespace-nowrap">Log In</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="#" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                            <FiLogOut className="text-xl" />
                            <span className="flex-1 ml-3 whitespace-nowrap">Log Out</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </aside>
    )
}

export default Sidebar
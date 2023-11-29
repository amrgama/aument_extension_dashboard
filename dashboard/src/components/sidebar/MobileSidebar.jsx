import React, { useRef, useState } from 'react'
import {FiLogOut} from "react-icons/fi"
import {LuLogIn} from "react-icons/lu"
import {FaUserGear, FaUsersGear} from "react-icons/fa6";
import {RxDashboard} from "react-icons/rx";
import { Link } from 'react-router-dom';
import CloseButton from './CloseButton';

const MobileSidebar = ({sidebarRef}) => {
    // const r = useRef();
    // const [close, setClose] = useState(false);
  return (
    <aside 
        ref={sidebarRef} 
        id="logoSidebar" 
        className={`w-full h-screen z-50 transition-transform -translate-x-full overflow-hidden fixed top-0 start-0`} 
        // style={{height: "calc(100vh - 66px)"}}
        aria-label="Sidebar"
    >
        <div className="relative w-full h-full px-3 py-4 overflow-y-auto bg-white">
            <div className="flex">
                <CloseButton id={"logoSidebar"} sidebarRef={sidebarRef} />
            </div>
            <ul className="space-y-2 font-medium ">
                <li>
                    <Link to="/dashboard" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                        <RxDashboard className="text-xl" />
                        <span className="flex-1 ml-3 whitespace-nowrap">Dashboard</span>
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

export default MobileSidebar
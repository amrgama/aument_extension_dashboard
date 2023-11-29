import React from 'react'
import vector from "../../assets/vector.webp";
import useMediaQuery from '../../hooks/useMediaQuery';

const Header = ({sidebarRef}) => {
    const matches_min_md_query = useMediaQuery(`(min-width: 640px)`);

    const handleButton = (e)=>{
        e.currentTarget.classList.toggle("active");

        if(matches_min_md_query){
            handleSidebar(e.currentTarget);
        }
        else{
            handleMobileSidebar();
        }
    }

    function handleSidebar(togglerButton){
        if(togglerButton.classList.contains("active")){
            // sidebarRef.current.style.transform = "translateX(-100%)";
            sidebarRef.current.classList.add("collapsed")
        }
        else{
            sidebarRef.current.classList.remove("collapsed")
            // sidebarRef.current.style.transform = "translateX(0%)";
        }
    }

    function handleMobileSidebar(){
        sidebarRef.current.style.transform = "translateX(0%)";
    }

  return (
    <header className="col-start-1 col-span-full row-start- row-span- z-40 sticky top-0 start-0 bg-primary">
        <div className="navbar h-fit">
            <div className="navbar-start">
                {/* <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Homepage</a></li>
                        <li><a>Portfolio</a></li>
                        <li><a>About</a></li>
                    </ul>
                </div> */}
                <button onClick={handleButton} className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                </button>
                <span className="flex-1 font-daysOne font-extrabold text-2xl md:text-3xl text-white text-start">Aument</span>
            </div>
            <div className="navbar-end">
                <button className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>
                <button className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                        <span className="badge badge-xs badge-primary indicator-item"></span>
                    </div>
                </button>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src={vector} />
                        </div>
                    </label>
                    {/* <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                        <a className="justify-between">
                            Profile
                            <span className="badge">New</span>
                        </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul> */}
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header
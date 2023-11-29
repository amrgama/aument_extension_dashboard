import React from 'react'
import Container from '../Container'
import { Link } from 'react-router-dom'
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <header className='w-full bg-primary absolute start-0 z-50'>
        <Container>
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown md:hidden">
              <label tabIndex={0} className="btn btn-ghost btn-circle text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
              </label>
              <ul tabIndex={0} className="menu menu-sm dropdown-content bg-slate-100 mt-3 z-[1] p-2 shadow rounded-box w-52">
                <li className=''><Link className="btn-ghost font-lato hover:text-dark" to="/">Feauters</Link></li>
                <li className=''><Link className="btn-ghost font-lato hover:text-dark" to="/">About</Link></li>
                <li className=''><Link className="btn-ghost font-lato hover:text-dark" to="/">Subscription</Link></li>
                {/* <li className=''><Link className="btn py-0 text-white font-bold border-white rounded-full" to="/">Feauters</Link></li> */}
              </ul>
            </div>
            <ul className='navbar hidden md:flex'>
              <li className='btn btn-ghost text-white font-lato capitalize px-3 py-1'>
                <Link>Features</Link>
              </li>
              <li className='btn btn-ghost text-white font-lato capitalize px-3 py-1'>
                <Link>About</Link>
              </li>
              <li className='btn btn-ghost text-white font-lato capitalize px-3 py-1'>
                <Link>Subscription</Link>
              </li>
            </ul>
          </div>
          <div className="navbar-center">
            <a className="normal-case text-xl p-0" style={{width: "100px", height:"100px"}}>
              <img src={logo} alt="..." className='w-full h-full rounded-full object-contain object-center' />
            </a>
          </div>
          <div className="navbar-end space-x-2">
            {/* <button className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>
            <button className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                <span className="badge badge-xs badge-primary indicator-item"></span>
              </div>
            </button> */}
            <Link to="/" className="btn btn-ghost capitalize text-white font-lato font-bold rounded-full">
              login
            </Link>
            <Link to="/" className="btn text-white font-lato font-bold capitalize border-0 bg-secondary rounded-full">
              Get Started
            </Link>
          </div>
        </div>
        </Container>
    </header>
  )
}

export default Header
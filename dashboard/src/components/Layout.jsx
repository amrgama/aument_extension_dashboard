import React, { useRef, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './header/Header'
import Sidebar from './sidebar/Sidebar'
import useMediaQuery from '../hooks/useMediaQuery'
import MobileSidebar from './sidebar/MobileSidebar'

const Layout = () => {
  const sidebarRef = useRef();
  const matches_min_md_query = useMediaQuery(`(min-width: 640px)`)

  return (
    <div className={`grid grid-cols-1 sm:layout-grid grid-rows`}>
      <Header sidebarRef={sidebarRef} />
      {
        matches_min_md_query &&
        <Sidebar sidebarRef={sidebarRef} />
      }
      {
        !matches_min_md_query &&
        <MobileSidebar sidebarRef={sidebarRef} />
      }
      <div className="col-start-1 sm:col-start-2 col-span-1">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
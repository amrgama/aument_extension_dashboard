import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import SignUp from './pages/SignUp.jsx'
import SignIn from './pages/SignIn.jsx'
import { ToastContainer } from 'react-toastify'
import Dashboard from './pages/Dashboard'
import Users from './pages/Users'
import Companies from './pages/Companies.jsx'

function App() {
  const [count, setCount] = useState(0)
  // window.localStorage.setItem("theme", "light");

  return (
    <div className="app bg-slate-200">
      <Routes>
        <Route path='/dashboard' element={<Layout />}>
          <Route index element={<Dashboard />}></Route>
          <Route path="users" element={<Users />}></Route>
          <Route path="companies" element={<Companies />}></Route>
        </Route>
        <Route path='/sign-up' element={<SignUp />} ></Route>
        <Route path='/sign-in' element={<SignIn />} ></Route>
      </Routes>
      <ToastContainer />
    </div>
  )
}

export default App

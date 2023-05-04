import React from 'react'
import { GiBrain } from 'react-icons/gi'
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-black ">
            <div className="container d-block align-items-center justify-content-center ">
            
            <p className="navbar-brand fs-2" style={{ color: "#d63384" }}>
                    <GiBrain size={28} className='ms-2'/>
                    <span className='ms-1'> Memory Game </span>
                 </p>
            </div>
        </nav>
  )
}

export default Navbar

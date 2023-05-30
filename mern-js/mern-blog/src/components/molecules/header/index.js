import React from 'react'
import "./header.scss"
import { BiLogOut } from "react-icons/bi";
import { RealMadrid } from '../../../assets';
// import { useNavigate } from 'react-router-dom'

export default function Header() {
  // let navigate = useNavigate()
  return (
    <nav className="header navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-sm content">
        <a className="navbar-brand mb-0 h1" href="/">
          <div className="brand-icon">
            <img className='rma-icon' src={RealMadrid} alt="icon" />
          </div>
          <div className="brand-title">
             RMA.CF<br/>Recently News
          </div>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="main-nav">
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <a className='nav-link text-light active' href='/login'><BiLogOut />Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  )
}

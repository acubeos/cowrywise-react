import React from 'react'
import './Navbar.css'

function Navbar() {

  return ( 
    <nav className="navbar navbar-expand-lg bg-light sticky-top" id="navbar">
        <div className="container-fluid py-2 gx-5">
            <a className="navbar-brand" href="#">
                <img src="../assets/logo.png" alt="logo" width="150" height="24"/>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
            
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle nav-a" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Personal
                </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li>
                                <hr className="dropdown-divider"/>
                            </li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle nav-a" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Business
                </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li>
                                <hr className="dropdown-divider"/>
                            </li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>
                    
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle nav-a" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Developer
                </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li>
                                <hr className="dropdown-divider"/>
                            </li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>

                        </li>

                        <li className="nav-item">
                            <a className="nav-link nav-a" href="#">Learn</a>
                        </li>
                </ul>
                

                <ul className="nav justify-content-end">

                    <li className="nav-item">
                        <a className="nav-link login-a" href="#">Log In</a>
                    </li>
                </ul>
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <a className="nav-link active login-a" aria-current="page" href="#">Sign up for free</a>
                    </li>
                </ul>

            </div>
        </div>
    </nav>
  )
}

export default Navbar

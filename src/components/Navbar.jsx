import React from 'react'
import { Link } from 'react-router-dom'
import r1 from "../Logo.jpg";
import "./styles/Navbar.css";
import { Heart } from 'lucide-react';
import User from './User';
import Shipping from '../shipping.js';
import MainPage from '../homepage.js';
import Register from '../Register.js';
import w1 from './registration.png';
import WoodenToys from '../WoodenToys.js';
import EducationalToys from '../EducationalToys.js';
import FunToys from '../FunToys.js';
import Rubsili from '../Rubsili.js';
import SportsToys from '../SportsToys.js';
import SoftToys from '../SoftToys.js';

export default function Navbar() {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-white height-20 text-white sticky-top">
                <div class="container-fluid mx-5">
                    <Link class="navbar-brand" to="/homepage">
                        <img src={r1} alt="Logo" className="site-logo logo-width" />
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/homepage">Home</Link>
                            </li>
                            <li class="nav-item1">
                                <Link class="nav-link active" aria-current="page" to="/contact">Contact</Link>
                            </li>
                            <li class="nav-item2">
                                <Link class="nav-link active" aria-current="page" to="/aboutus">About Us</Link>
                            </li>
                            <li className="nav-item3 dropdown">
                                <Link className="nav-link" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                                    Categories <span className="dropdown-arrow">&#9660;</span>
                                </Link>

                                <ul class="dropdown-menu p-4">
                                    <li><Link to="/ride">Religion Toys</Link></li>
                                    <li><Link to="/story">Story Teller</Link></li>
                                    <li><Link to="/WoodenToys">Wooden Toys</Link></li>
                                    <li><Link to="/FunToys">Fun</Link></li>
                                    <li><Link to="/SportsToys">Sports</Link></li>
                                    <li><Link to="/EducationalToys">Education</Link></li>
                                    <li><Link to="/Rubsili">Rubber & Silicon</Link></li>
                                    <li><Link to="/SoftToys">Soft Toys</Link></li>
                                </ul>
                            </li>
                        </ul>
                        <form class="search-form" role="search">
                            <input class="search-bar" type="search" placeholder="Search" aria-label="Search" />
                            <button class="search-button" type="submit">Search</button>
                        </form>
                        
                        <div className="icon-group">
                            <Link to="/RoleLogin">
                                <User className="icon-btn" size={24} />
                            </Link>
                            <Link to="/Addtocart">

                            </Link>
                            <Link to="/RoleLogin">
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="black" class="bi bi-person-circle" viewBox="0 0 16 16">
                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                                </svg>
                                <span>Login</span>
                            </Link>
                            {/* <Link to="/register">
                            <img src={w1} alt="Register" className='register-image'/>
                            <span>Register</span>
                            </Link> */}
                            <Link to="/Addtocart">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="black" class="bi bi-cart" viewBox="0 0 16 16">
                                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

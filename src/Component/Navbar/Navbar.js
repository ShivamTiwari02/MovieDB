import React from 'react'
import './Navbar.css'
// import * from '../../assets/'

const Navbar = () => {
    return(
        <header>
            <div id="top-header">
                <div id="logo">
                    <img src="https://media.wired.com/photos/592682057034dc5f91bebab8/4:3/w_929,h_697,c_limit/NetflixLogo2016.jpg" alt="LOGO"/>
                </div>   
                <nav>
                <div id="menu">
                    <ul>
                        <li class="active"><a href="#">Home</a></li>
                        <li><a href="#">Upcoming</a></li>
                        <li><a href="#">Favorites</a></li>
                        <li><a href="#">Sign In</a></li>
                        <li><a href="#">Sign Up</a></li>
                    </ul>
                </div>
                </nav>
            </div>   
            <div id="header-image-menu">
            </div>
        </header> 
    )
}

export default Navbar;
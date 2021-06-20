import React from 'react'
import classes from './Navbar.css'
// import * from '../../assets/'

const Navbar = () => {
    return(
        <header className = {classes.Header}>
            <div className={classes.topHeader}>
                <div className = {classes.logo}>
                    <img src="https://media.wired.com/photos/592682057034dc5f91bebab8/4:3/w_929,h_697,c_limit/NetflixLogo2016.jpg" alt="LOGO"/>
                </div>   
                <nav>
                <div className = {classes.menu}>
                    <ul>
                        <li className={classes.active}><a href="#">Home</a></li>
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
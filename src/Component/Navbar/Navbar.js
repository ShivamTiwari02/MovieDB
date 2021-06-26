import React, {useState} from 'react'
import classes from './Navbar.css';
import {Link} from 'react-router-dom'

const Navbar = () => {

    const[navbar, setNavbar] = useState(false)

    const changeBackground = () => {
        if(window.scrollY >= 60){
            setNavbar(true)
        }
        else{
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeBackground)

    return(
        <div className = {navbar ? [classes.Navbar, classes.active].join(' ') : classes.Navbar}>
                <div className = {classes.logo}>
                    <img height = '50px' width= '80px' src="https://media.wired.com/photos/592682057034dc5f91bebab8/4:3/w_929,h_697,c_limit/NetflixLogo2016.jpg" alt="LOGO"/>
                </div>   
                <div className = {classes.menu}>
                        <li><Link to="/signin">Sign In</Link></li>
                        <li><Link to="/signup">Sign Up</Link></li>
                </div>
        </div> 
    )
}

export default Navbar;
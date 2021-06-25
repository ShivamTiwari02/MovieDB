import React, {useState} from 'react'
import classes from './Navbar.css'
// import * from '../../assets/'

const Navbar = () => {

    const[navbar, setNavbar] = useState(false)

    window.scroll(function(){
        if ((window).scrollY() >= 50){
            navbar = setNavbar(true)
        }
        else{
            navbar = setNavbar(false)
        }
    })

    const style = navbar ? {backgroundColor : 'red'} : {backgroundColor : 'transparent'}

    return(
        <header style = {style} className = {classes.Header}>
            <div className={classes.topHeader}>
                <div className = {classes.logo}>
                    <img src="https://media.wired.com/photos/592682057034dc5f91bebab8/4:3/w_929,h_697,c_limit/NetflixLogo2016.jpg" alt="LOGO"/>
                </div>   
                <nav>
                <div className = {classes.menu}>
                    <ul>
                        <li className={classes.active}><a href="#">Home</a></li>
                        <li><a href="#">Upcoming</a></li>
                        <li><a href="#trending">Favorites</a></li>
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
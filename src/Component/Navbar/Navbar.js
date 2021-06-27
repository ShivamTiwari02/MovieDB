import React, {useState} from 'react'
import classes from './Navbar.css';
import {Link, useHistory} from 'react-router-dom'
import { useAuth } from '../Auth/authcontext';

const Navbar = () => {

    const[navbar, setNavbar] = useState(false);
    const {currentUser, logout} = useAuth();
    const history = useHistory()

    const changeBackground = () => {
        if(window.scrollY >= 60){
            setNavbar(true)
        }
        else{
            setNavbar(false)
        }
    }

    async function handleLogout () {
        try{
            await logout();
            history.push('/signin')
        }
        catch(error){
            alert("Failed to logout")
        }
    }   

    window.addEventListener('scroll', changeBackground)

    return(
        <div className = {navbar ? [classes.Navbar, classes.active].join(' ') : classes.Navbar}>
                <div className = {classes.logo}>
                    <Link to = '/'>
                        <img height = '50px' width= '80px' src="https://media.wired.com/photos/592682057034dc5f91bebab8/4:3/w_929,h_697,c_limit/NetflixLogo2016.jpg" alt="LOGO"/>
                    </Link>
                </div>   
                <div className = {classes.menu}>
                        {currentUser ? <li><Link to="/">{currentUser.email}</Link></li>:<li><Link to="/signin">Sign In</Link></li>}
                        {currentUser ? <li><Link onClick = {handleLogout}>Logout</Link></li>:<li><Link to="/signup">Sign Up</Link></li>}
                </div>
        </div> 
    )
}

export default Navbar;
import React, { Component } from 'react'
import Navbar from '../Component/Navbar/Navbar';
import Movies from '../Component/Movies/Movies';
import './Layout.css';
import '../Component/Auth/Signup'
import Signup from '../Component/Auth/Signup';

class Layout extends Component{
    render(){
        return(
            <div className='Layout'>
                <Navbar/>
                <Movies/>
                {/* <Signup/> */}
            </div>
        )
    }
}

export default Layout;
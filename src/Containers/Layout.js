import React, { Component } from 'react'
import Navbar from '../Component/Navbar/Navbar';
import Movies from '../Component/Movies/Movies';
import './Layout.css'

class Layout extends Component{
    render(){
        return(
            <div className='Layout'>
                <Navbar/>
                <Movies/>
            </div>
        )
    }
}

export default Layout;
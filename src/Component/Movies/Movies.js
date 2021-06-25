import React, {Component} from 'react'
import classes from './Movies.css';
import Cover from './Cover/Cover' ;
import req from '../../api/requests';
import MRow from './MRow/MRow'

class Movies extends Component{ 
    render(){  
        return(
            <div className = {classes.Movies}>
                <Cover/>
                <div>
                    <h4 id = "trending">Trending Movies</h4>
                    <MRow request = {req.fetchTrending}/>
                    <h4>Action Movies</h4>
                    <MRow request = {req.fetchActionMovie}/>
                    <h4>Comedy Movies</h4>
                    <MRow request = {req.fetchComedyMovie}/>
                    <h4>Horror Movies</h4>
                    <MRow request = {req.fetchHorrorMovie}/>
                </div>
            </div>
        )
    }
}

export default Movies;

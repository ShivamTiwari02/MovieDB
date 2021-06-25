import React, {Component} from 'react';
import classes from './Cover.css';
import axios from '../../../api/base_axios';
import req from '../../../api/requests';

class Movie extends Component{

    state = {
        title: '',
        desc: '',
        img: 'https://image.tmdb.org/t/p/w500/'
    } 

    componentDidMount(){
        const number = Math.floor(Math.random() * 20);
        axios.get(req.fetchTopRated)
        .then(res =>{
            this.setState({title : res.data.results[number].original_title});
            this.setState({desc : res.data.results[number].overview});
            this.setState({img : this.state.img + res.data.results[number].backdrop_path});
        })
        .catch(err => {
            console.log(err);                
        });
    }

    

    render(){

        const imageURL = 'url("'+this.state.img+'")';
        const style = {
            backgroundImage: imageURL,            
        };
        console.log(this.state.desc)
        return(
            <div className={classes.Cover}>
                <div className = {classes.details}>
                    <h2>{this.state.title}</h2>
                    <p className ={classes.desc}>{this.state.desc.substr(0,200)}.... <a link = '#'>(read More)</a></p>
                </div>
                <div className = {classes.image} style = {style}></div>
            </div>
        )
    }
}

export default Movie;
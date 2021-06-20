import React, {Component} from 'react';
import classes from './Movie.css';
import axios from '../../../api/base_axios';
import req from '../../../api/requests';

class Movie extends Component{

    state = {
        title: '',
        desc: '',
        img: 'https://image.tmdb.org/t/p/w500/'
    } 

    componentDidMount(){
        axios.get(req.fetchTopRated)
        .then(res =>{
            this.setState({title : res.data.results[0].original_title});
            this.setState({desc : res.data.results[0].overview});
            this.setState({img : this.state.img + res.data.results[0].poster_path});
        })
        .catch(err => {
            console.log(err);                
        });
    }

    

    render(){
        return(
            <div className={classes.Movie}>
                <div className={classes.card} >
                    <h3>{this.state.title}</h3>
                    <img src = {this.state.img} />
                    <p>{this.state.desc.substr(0,100)}.... <a >read more</a></p>    
                </div>
            </div>
        )
    }
}

export default Movie;
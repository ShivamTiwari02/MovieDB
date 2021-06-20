import React, {Component} from 'react'
import './Movies.css';
import Movie from './Cover/Cover' ;
import axios from '../../api/base_axios';
import req from '../../api/requests'

class Movies extends Component{ 

    state = {
        Top_10: []
    }
    
    topMoviesHandler(){
        axios.get(req.fetchTrending)
        .then(res =>{
            const movies = [];
            res.data.results.map(result => {
                let titles = {
                    title: '',
                    img: 'https://image.tmdb.org/t/p/w500/',
                    desc: ''
                };
                titles.title = result.original_title ? result.original_title: result.original_name;
                titles.img = titles.img + result.poster_path;
                titles.desc = result.overview;
                console.log(titles)
                movies.push(titles);
            });
            this.setState({Top_10: movies})
            // console.log(this.state.Top_10)
        })
        .catch(err => {
            console.log(err);                
        });
    }

    render(){  

        console.log(req.fetchComedyMovie);

        let top10 = null;
        if(this.state.Top_10.length > 5){
            top10 = <ul>{this.state.Top_10.map(
                movie => {
                    return(
                    <li><img src = {movie.img}></img></li>
                    )
                }
            )
            }</ul>
        };
        return(
            <div>
                <Movie/>
                <button onClick = {() => this.topMoviesHandler()}>Top Movies</button>
                {top10}
            </div>
        )
    }
}

export default Movies;

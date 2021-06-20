import React, {Component} from 'react'
import './Movie.css'
import axios from 'axios'

const api_key = 'c9591b3aea2e8872d00c222ef4d74bd1';
const url = 'https://api.themoviedb.org/3/movie/550?api_key=' + api_key;

class Movie extends Component{

    state = {
        title: '',
        desc: '',
        img: 'https://image.tmdb.org/t/p/w500/',
        Top_10: ['']
    } 

    componentDidMount(){
        axios.get(url)
        .then(res =>{
            console.log(res.data);
            this.setState({title : res.data.original_title});
            this.setState({desc : res.data.overview});
            this.setState({img : this.state.img + res.data.poster_path});
            // console.log(this.state.img)
        })
        .catch(err => {
            console.log(err);                
        });
    }

    topMoviesHandler(){
        axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=c9591b3aea2e8872d00c222ef4d74bd1&language=en-US&page=1')
        .then(res =>{
            const titles = [];
            res.data.results.map(result => {
                // console.log(result.original_title);
                titles.push(result.original_title);
            });
            this.setState({Top_10: titles})
            // console.log(this.state.Top_10)
        })
        .catch(err => {
            console.log(err);                
        });
    }

    render(){

        let top10 = null;
        if(this.state.Top_10.length > 5){
            top10 = <ul>{this.state.Top_10.map(
                movie => {
                    return(
                    <li>{movie}</li>
                    // console.log(movie + "   1")
                    )
                }
            )
            }</ul>
        };

        console.log(top10)


        return(
            <div className='Movie'>
                <div className="movie_card" >
                    <h3>{this.state.title}</h3>
                    <img src = {this.state.img} />
                    <p>{this.state.desc.substr(0,100)}.... <a >read more</a></p>
                    <button onClick = {() => this.topMoviesHandler()}>Top Movies</button>
                    {top10}
                </div>
            </div>
        )
    }
}

export default Movie;
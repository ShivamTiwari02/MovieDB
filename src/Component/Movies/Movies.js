import React, {Component} from 'react'
import './Movies.css';
import axios from 'axios';

const api_key = 'c9591b3aea2e8872d00c222ef4d74bd1';
const url = 'https://api.themoviedb.org/3/movie/550?api_key=' + api_key; 

class Movies extends Component{ 

    state = {
        title: '',
        desc: '',
        img: 'https://image.tmdb.org/t/p/w500/'
    } 

    componentDidMount(){
        axios.get(url)
        .then(res =>{
            // console.log(res.data);
            this.setState({title : res.data.original_title});
            this.setState({desc : res.data.overview});
            this.setState({img : this.state.img + res.data.poster_path});
            console.log(this.state.img)
        })
        .catch(err => {
            console.log(err);                
        });
    }

    render(){  
        return(
            <div className='Movies'>
                <div className="movie_card">
                    <h3>{this.state.title}</h3>
                    <img src={this.state.img} />
                    <p>{this.state.desc.substr(0,100)}.... <a >read more</a></p>
                </div>
            </div>
        )
    }
}

export default Movies;

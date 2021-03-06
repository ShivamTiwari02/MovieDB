import React, {Component} from 'react';
import classes from './MRow.css';
import axios from '../../../api/base_axios'
import {Link } from 'react-router-dom';

class MRow extends Component {

    state = {
        Top_20: []
    }
    
    componentDidMount(){
        axios.get(this.props.request)
        .then(res =>{
            const movies = [];
            res.data.results.map(result => {
                let titles = {
                    title: '',
                    img: 'https://image.tmdb.org/t/p/w500/',
                    desc: '',
                    id: ''
                };
                titles.title = result.original_title ? result.original_title: result.original_name;
                titles.img = titles.img + result.poster_path;
                titles.desc = result.overview;
                titles.id = result.id;
                movies.push(titles);
            });
            this.setState({Top_20: movies})
        })
        .catch(err => {
            console.log(err);                
        });
    }
    render(){
        let top10 = null;
        if(this.state.Top_20.length > 5){
            top10 = this.state.Top_20.map(
                movie => {
                    return(
                        <Link to = {{
                            pathname: '/movie',
                            search: '?name='+ movie.id,
                            Props:{
                                title : movie .title,
                                img: movie.img,
                                desc: movie.desc
                            }
                        }}>
                            <div className={classes.card} key={movie.id}>
                                <div className={classes.inner}>
                                    <div className={classes.image}>
                                        <img className={classes.image} src = {movie.img} alt='Movie_Poster'></img>
                                    </div>
                                </div> 
                            </div>
                        </Link>
                    )
                }
            )
        }
        else{
            top10 = <h1>Something Went Wrong....</h1>
        }
        return(
            <div className = {classes.MRow}>
                {top10}
            </div>
        )
    }
}

export default MRow;
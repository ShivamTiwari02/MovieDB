import React, {Component} from 'react';
import classes from './MRow.css';
import axios from '../../../api/base_axios'

class MRow extends Component {

    state = {
        Top_20: []
    }
    
    componentDidMount(){
        axios.get(this.props.request)
        .then(res =>{
            const movies = [];
            // console.log(res.data.results)
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
                // console.log(titles)
                movies.push(titles);
            });
            this.setState({Top_20: movies})
            // console.log(this.state.Top_10)
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
                        <div className={classes.card} key={movie.id}>
                            <div className={classes.inner}>
                                <div className={classes.image}>
                                    <img className={classes.image} src = {movie.img} alt='Movie_Poster'></img>
                                </div>
                                <div className={classes.details}>
                                    <h1>{movie.title}</h1>
                                    <p>{movie.desc}</p>
                                </div>
                            </div> 
                        </div>
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
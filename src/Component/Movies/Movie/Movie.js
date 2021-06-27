import React, {useEffect, useState} from 'react';
import classes from './Movie.css';
import { useLocation, Redirect } from 'react-router';
import axios from 'axios'
import { API_KEY } from '../../../api/requests';
import Navbar from '../../Navbar/Navbar'
import { useAuth } from '../../Auth/authcontext';

export default function Movie(props) {

    const search = useLocation().search;
    const id = new URLSearchParams(search).get('name');
    const [movie, setMovie] = useState({});
    const { currentUser } = useAuth();

    useEffect(() => {        
        axios.get('https://api.themoviedb.org/3/movie/' + id + '?api_key=' + API_KEY + '&language=en-US')
        .then(res =>{
            console.log(res.data.original_title)
            let titles = {
                title: '',
                img: 'https://image.tmdb.org/t/p/w500/',
                desc: '',
                id: '',
                date: '',
                runtime: '',
                vote: '',
                vote_count: ''
            };
            titles.title = res.data.original_title ? res.data.original_title: res.data.original_name;
            titles.img = titles.img + res.data.poster_path;
            titles.desc = res.data.overview;
            titles.id = res.data.id;;
            titles.date = res.data.release_date;
            titles.runtime = res.data.runtime;
            titles.vote = res.data.vote_average;
            titles.vote_count = res.data.vote_count;
            console.log(props.User)
            setMovie(titles)
        })  
    }, [])
    return (
        <div className = {classes.Movie}>
           <Navbar/>
           <div className = {classes.image}>
                <img src = {movie.img}/>
           </div>
           <div className = {classes.details}>
                <h1>{movie.title}</h1>
                <p>{movie.desc}</p>
                <p>Release Date : {movie.date}</p>
                <p>Movie Runtime : {movie.runtime} mins</p>
                <p>Vote Average : {movie.vote}/10    ( {movie.vote_count} votes )</p>
           </div>
        </div>
    )
}

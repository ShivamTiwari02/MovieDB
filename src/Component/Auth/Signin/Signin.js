import React, { useRef, useState } from 'react';
import classes from './Signin.css';
import {useHistory, Link} from 'react-router-dom';
import getFirebase from '../Firebase';
import { useAuth } from '../authcontext'

export default function Signin() {

    const emailRef = useRef()
    const passwordRef = useRef()
    const { signin } = useAuth();
    const [error, setError] = useState('');
    const history = useHistory();

    async function submitHandler(e) {

        e.preventDefault()

        try{
            setError('')
            await signin(emailRef.current.value, passwordRef.current.value);
            history.push('/')
        }
        catch{
            setError('Failed to sign in')
        }
    }

    // if(this.state.signedin){
    //     console.log('redirecting');
    //     return <Redirect to = '/'/>
    // }
    return (
            <div className = {classes.SignUp}>
                <form onSubmit = {(e) => submitHandler(e)} className = {classes.login}>
                    <div className = {classes.title}>Log In</div>
                    {error && <div className = {classes.error}>{error}</div>}
                    <div className ={classes.login_group}>
                        <label className = {classes.login_group_label}>Enter Email</label>
                        <input className = {classes.login_group_input} type="email" name="email" ref = {emailRef}/>
                    </div>
                    <div className ={classes.login_group}>
                        <label className = {classes.login_group_label}>Enter Password</label>
                        <input className = {classes.login_group_input} type="password" name="passoword" ref = {passwordRef}/>
                    </div>    
                    <input className = {classes.login_signin} type="submit" value="Login" />
                    <div className = {classes.redirect}>
                        <Link to  = "/" className = {classes.links}>Go back</Link>
                        <Link to  = "/signup" className = {classes.links}>Not Yet Registered?</Link>
                    </div>
                </form>
            </div>
        )
    
}


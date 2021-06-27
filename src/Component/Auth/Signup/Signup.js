import React, { useRef, useState } from 'react';
import classes from './Signup.css';
import {Link, useHistory} from 'react-router-dom';
import getFirebase from '../Firebase';
import { useAuth } from '../authcontext'

export default function Signup() {

    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth();
    const [error, setError] = useState('');
    const history = useHistory();

    async function submitHandler(e) {

        e.preventDefault()
        
        if(passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError('Password do not match')
        }

        try{
            setError('')
            await signup(emailRef.current.value, passwordRef.current.value);
            history.push('/')
        }
        catch{
            setError('Failed to create an account')
        }
    }

    // if(this.state.signedin){
    //     console.log('redirecting');
    //     return <Redirect to = '/'/>
    // }
    return (
            <div className = {classes.SignUp}>
                <form onSubmit = {(e) => submitHandler(e)} className = {classes.login}>
                    <div className = {classes.title}>Sign Up</div>
                    {error && <div className = {classes.error}>{error}</div>}
                    <div className ={classes.login_group}>
                        <label className = {classes.login_group_label}>Enter Email</label>
                        <input className = {classes.login_group_input} type="email" name="email" ref = {emailRef}/>
                    </div>
                    <div className ={classes.login_group}>
                        <label className = {classes.login_group_label}>Enter Password</label>
                        <input className = {classes.login_group_input} type="password" name="passoword" ref = {passwordRef}/>
                    </div>
                    <div className ={classes.login_group}>
                        <label className = {classes.login_group_label}>Enter Password Again</label>
                        <input className = {classes.login_group_input} type="password" name="confirmPassoword" ref = {passwordConfirmRef} />
                    </div>       
                    <input className = {classes.login_signin} type="submit" value="Sign Up" />
                    <div className = {classes.redirect}>
                        <Link to  = "/" className = {classes.links}>Go back</Link>
                        <Link to  = "/signin" className = {classes.links}>Already Registered?</Link>
                    </div>
                </form>
            </div>
        )
    
}


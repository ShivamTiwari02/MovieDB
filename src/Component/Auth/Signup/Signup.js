import classes from './Signup.css';
import React, {useRef} from 'react'

export default function Signup() {
    const emailRef= useRef();
    const passwordRef= useRef();
    const passwordConfirmRef= useRef();
    return (
            <div className = {classes.container}>
                <form className = {classes.SignUp}>
                    <label className = {classes.Label}>Email :</label>
                    <input type="email" name="email" useRef = {emailRef}/>
                    <label className = {classes.Label}>Password :</label>
                    <input type="password" name="passoword" ref = {passwordRef} />
                    <label className = {classes.Label}>Confirm Password: </label>
                    <input type="password" name="confirmPassoword" ref = {passwordConfirmRef} />
                    <input type="submit" value="Submit" />
                </form>
                <div className = "Label">
                    Already have an account? Log In
                </div>
            </div>
        
    )
}

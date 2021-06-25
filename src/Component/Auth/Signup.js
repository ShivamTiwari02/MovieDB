import classes from './SignUp.css';
import React, {useRef} from 'react'

export default function Signup() {
    const emailRef= useRef();
    const passwordRef= useRef();
    const passwordConfirmRef= useRef();
    return (
            <div>
                <form className = {classes.SignUp}>
                    <label className = {classes.Label}>
                        Email :
                        <input type="email" name="email" useRef = {emailRef}/>
                    </label>
                    <label className = {classes.Label}>
                        Password : 
                        <input type="password" name="passoword" ref = {passwordRef} />
                    </label>
                    <label className = {classes.Label}>
                        Confirm Password : 
                        <input type="password" name="confirmPassoword" ref = {passwordConfirmRef} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <div className = "Label">
                    Already have an account? Log In
                </div>
            </div>
        
    )
}

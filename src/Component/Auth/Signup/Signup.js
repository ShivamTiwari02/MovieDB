import React, { Component } from 'react';
import classes from './Signup.css';
import {Redirect, Link} from 'react-router-dom';
import getFirebase from '../Firebase';

class Signup extends Component {
    state = {
        email : "",
        password: "",
        confirmPassword: "",
        signedup: false
    }

    emailhandler(e){
        this.setState({email: e.target.value});
    }

    passwordhandler(e){
        this.setState({password: e.target.value})
    }

    confirmPasswordhandler(e){
        this.setState({confirmPassword: e.target.value})
    }

    async submitHandler(e){
        const firebaseInstance = getFirebase();
        // console.log(this.state.email, this.state.password);
        e.preventDefault();
        try {
            if (firebaseInstance) {
              const user = await firebaseInstance.auth().createUserWithEmailAndPassword(this.state.email, this.state.password);
              console.log("user", user)
              this.setState({signedup: true})
              alert(`Welcome ${this.state.email}!`);
            }
          } catch (error) {
            console.log("error", error);
            this.setState({signedup: false})
            alert(error.message);
          }         
    }

    render() {
        if(this.state.signedin){
            console.log('redirecting');
            return <Redirect to = '/'/>
        }
        return (
            <div className = {classes.SignUp}>
                <form onSubmit = {(e) => this.submitHandler(e)} className = {classes.login}>
                    <div className = {classes.title}>Sign Up</div>
                    <div className ={classes.login_group}>
                        <label className = {classes.login_group_label}>Enter Email</label>
                        <input className = {classes.login_group_input} type="email" name="email" value = {this.state.email} onChange = {(event) => this.emailhandler(event)}/>
                    </div>
                    <div className ={classes.login_group}>
                        <label className = {classes.login_group_label}>Enter Password</label>
                        <input className = {classes.login_group_input} type="password" name="passoword" value = {this.state.password} onChange = {(event) => this.passwordhandler(event)}/>
                    </div>
                    <div className ={classes.login_group}>
                        <label className = {classes.login_group_label}>Enter Password Again</label>
                        <input className = {classes.login_group_input} type="password" name="confirmPassoword" value = {this.state.confirmPassword} onChange = {(event) => this.confirmPasswordhandler(event)} />
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
}

export default Signup;

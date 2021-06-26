import React, { Component } from 'react';
import classes from './Signin.css';
import {Redirect, Link, useHistory} from 'react-router-dom';
import getFirebase from '../Firebase';

class Signin extends Component {
    state = {
        email : "",
        password: "",
        confirmPassword: "",
        signedin: false
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
              const user = await firebaseInstance.auth().signInWithEmailAndPassword(this.state.email, this.state.password);
              console.log("user", user, "Signed In");
              this.setState({signedin: true});
              alert(`Logged In`);
            }
          } catch (error) {
            console.log("error", error);
            this.setState({signedin: false});
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
                    <div className = {classes.title}>Sign In</div>
                    <div className ={classes.login_group}>
                        <label className = {classes.login_group_label}>Enter Email</label>
                        <input className = {classes.login_group_input} type="email" name="email" value = {this.state.email} onChange = {(event) => this.emailhandler(event)}/>
                    </div>
                    <div className ={classes.login_group}>
                        <label className = {classes.login_group_label}>Enter Password</label>
                        <input className = {classes.login_group_input} type="password" name="passoword" value = {this.state.password} onChange = {(event) => this.passwordhandler(event)}/>
                    </div>     
                    <input className = {classes.login_signin} type="submit" value="Login" />
                    <div className = {classes.redirect}>
                        <Link to  = "/" className = {classes.links}>Go back</Link>
                        <Link to  = "/signup" className = {classes.links}>Not yet registered?</Link>
                    </div>
                </form>
            </div>
        )
    }
}

export default Signin;

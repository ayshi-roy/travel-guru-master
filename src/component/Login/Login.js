import React, { useContext, useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import './Login.css';
import firebaseConfig from '../../firebase.config';
import { UserContext } from '../../App';
import { Link, useHistory, useLocation } from 'react-router-dom';
import Logo from '../../Image/Logo.png';

firebase.initializeApp(firebaseConfig);




const Login = () => {

    
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    //for Facebook sign in
    const handleFacebookSignIn = () => {
        const fbprovider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(fbprovider).then(function(result) {            
            const {displayName, email} = result.user;
            const fbSignedInUser = {name: displayName, email};
            setLoggedInUser(fbSignedInUser);
            history.replace(from);
            console.log(fbSignedInUser);
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            console.log(error);
            // ...
          });
    }
    
    //for google sign in
    const handleGoogleSignIn = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(googleProvider).then(function(result) {
            const {displayName, email} = result.user;
            const signedInUser = {name: displayName, email}
            setLoggedInUser(signedInUser);
            history.replace(from);
            
            // ...
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
    }


    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignedIn: false,        
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        error: '',
        success: false         
    })


    const handleBlur = (e) => {
        let isFieldValid = true;
        if(e.target.name === 'email'){
           isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if(e.target.name === 'password'){
            const isPasswordValid = e.target.value.length >5;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            isFieldValid = isPasswordValid && passwordHasNumber;
        }
        if(isFieldValid){
            const newUserInfo = {...user};
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    } 
    const handleSubmit = (e) => {
        console.log(user.email, user.password, user.firstName);

        //for new user create an account
        if(newUser && user.email && user.password){
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then(res => {
                const newUserInfo = {...user};
                newUserInfo.error = '';
                newUserInfo.success = true;
                setUser(newUserInfo);                
                setLoggedInUser(newUserInfo);
                history.replace(from);
                console.log(res)
            })
            .catch(error => {
                // Handle Errors here.
                const newUserInfo = {...user};
                newUserInfo.error = error.message;
                newUserInfo.success = false;
                setUser(newUserInfo);                
                // ...
              });
        }
        
        //for login a user
        if(!newUser && user.email && user.password){
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then(res => {
                const newUserInfo = {...user};
                newUserInfo.error = '';
                newUserInfo.success = true;
                setUser(newUserInfo);                               
                setLoggedInUser(newUserInfo);                
                history.replace(from);
                console.log(res)
            })
            .catch(function(error) {
                // Handle Errors here.
                const newUserInfo = {...user};
                newUserInfo.error = error.message;
                newUserInfo.success = false;
                setUser(newUserInfo);
                // ...
              });
        }

        e.preventDefault();
    }



    return (
    <>    
        <div className="col-md-12">
            <nav className="navbar navbar-expand-lg" style={{backgroundColor:'#FFA900', borderRadius: '10px'}}>
                     <a className="navbar-brand" href="#"><img src={Logo}/></a>                    
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav  ml-auto">
                        <li className="nav-item active">
                            <Link to="/home">
                               <a className="nav-link" href="#">Home<span className="sr-only">(current)</span></a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Destination</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                            <li className="nav-item">
                               <a className="nav-link disabled" href="#"></a>
                            </li>
                        </ul>
                    </div>
                </nav>
        </div>
        <div className="container">            
            <div className="row justify-content-md-center">                
                <div className="col-md-5">
                    <div className="login">
                        <div className="createAccount">
                            <h5>{newUser ? 'Create An Account' : 'Login'}</h5>
                            <form onSubmit={handleSubmit}>
                                {newUser && <input type="text" name="firstName" onBlur={handleBlur} placeholder="First Name" required/>}
                                {newUser && <input type="text" name="lastName" onBlur={handleBlur} placeholder="Last Name" required/>}
                                <input type="text" name="email" onBlur={handleBlur} placeholder="email" required/>
                                <input type="password" name="password" onBlur={handleBlur} placeholder="password" required/> 
                                {newUser && <span>Your password must be 6 character & also using one or more number</span>}                               
                                <br/>
                                <input type="submit" value={newUser ? "Create an account" : 'login'} style={{width:'22rem',textAlign:'center'}} className="btn btn-warning btn-lg"/>
                            </form>                                                        
                        </div>
                        <p style={{textAlign:'center'}}>{!newUser ? "Don't have an account?" : 'Already have an account'}
                        <br/>
                        <input type="checkbox" onChange={() => setNewUser(!newUser) } name="newUser"/>
                        <label htmlFor="newUser"  className="text-warning">{!newUser ? "Create an account" : 'login'}</label></p>                        
                    </div>
                    <p style={{color:'red',fontSize:'20px',textAlign:'center',marginTop:'20px'}}>{user.error}</p>
                    {
                        user.success && <p style={{color:'green',fontSize:'20px',textAlign:'center',marginTop:'20px'}}>User{newUser ? 'created' : 'Logged in'} successfully</p>
                    }
                    <hr/>
                    <center>
                        <div>
                           <button className="btn btn-warning btn-lg" onClick={handleGoogleSignIn}>Continue with Google</button>
                        </div>
                        <br/> 
                        <div>
                            <button className="btn btn-warning btn-lg" onClick={handleFacebookSignIn}>Continue with Facebook</button>
                        </div>
                    </center>                        
                </div>                
            </div>
        </div>        
    </>    
    );
};

export default Login;
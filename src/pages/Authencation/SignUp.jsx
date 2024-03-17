
import './Auth.css';

import Auth from "../../components/Auth/Auth";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { signup } from '../../apis/fakestoreprodapis';
import { useState } from 'react';
//import { NotificationManager } from 'react-notifications';
//import 'react-notifications/lib/notifications.css';



export default function SignUp(){


    const navigate = useNavigate();

    const [resetSignUpform , setresetsignupform]= useState(false);

    

    return(
        <div className="container">
        <div className="row">
            <h2 className="home-title text-center">
                Welcome to Shop Cart
            </h2>
        </div>
        <div className="login-wrapper" id="loginForm">
            <h4 className="text-center">SignUp</h4>
            <Auth
               
                onSubmit={async (autharguments)=>{


                    try {

                        await axios.post(signup(),{
                            username: autharguments.username,
                            email : autharguments.email,
                            password: autharguments.password
                           })
        
                           navigate('/signin');
            
        
                        
                    } catch (error) {
                        console.log(error);
                        setresetsignupform(true);
                        //resetform();
                       // NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
          
                    }

                   
                }}
                   
                 resetform={resetSignUpform}
               
            
            
            />
            <div className="signup-btn text-center" id="showSignupBtn"> 
            <Link to="/signin">Already have an Account? Sign In Here</Link> 
            </div>
            
        </div>
    </div>

    )
}
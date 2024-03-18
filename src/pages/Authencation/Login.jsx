import { Link, useNavigate } from 'react-router-dom'
import Auth from '../../components/Auth/Auth'
import './Auth.css'
import {  useContext, useRef } from 'react';
import axios from 'axios';
import { signin } from '../../apis/fakestoreprodapis';
import { useCookies } from 'react-cookie';
import { jwtDecode } from 'jwt-decode';
import UserContext from '../../context/UserContext';



export default function Login(){

    const authRef = useRef(null);
     const navigate = useNavigate();
     const [token, setToken] = useCookies(['jwt-token']);
     const {user ,setuser} = useContext(UserContext);
      //const {setUser} = useContext(UserContext);
    async function onAuthFormSubmit(formDetails) {
        try {
            const response = await axios.post(signin(), {
                username: formDetails.username,
                email: formDetails.email,
                password: formDetails.password
            },); 
        
            //console.log(response)
            const tokenDetails = jwtDecode(response.data.token)
            console.log(tokenDetails);
            setuser({username: tokenDetails.user, id: tokenDetails.id});
    
            setToken('jwt-token', response.data.token);
              navigate('/');
        } catch (error) {
            authRef.current.resetFormData();
            console.log(error);
        }
    }

    return(
        <div className="container">
            <div className="row">
                <h2 className="home-title text-center">
                    Welcome to Shop Cart
                </h2>
            </div>
            <div className="login-wrapper" id="loginForm">
                <h4 className="text-center">Login</h4>
                <Auth

                     onSubmit={onAuthFormSubmit} ref={authRef} 
                
                
                />
                <div className="signup-btn text-center" id="showSignupBtn">
                <Link to="/signup"> Dont have an Account? Sign Up Here </Link>
                     </div>
                
            </div>
        </div>

    


    )
}
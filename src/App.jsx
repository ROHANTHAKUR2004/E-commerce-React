
import { useEffect, useState } from 'react';
import './App.css'
import Header from './components/Navbar/Header'
import Footer from './components/Navbar/footer/Footer';
import UserContext from './context/UserContext';
import MainRoutes from './routes/MainRoutes';
import CartContext from './context/CartContext';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { jwtDecode } from 'jwt-decode';
import { fetchusercart } from './helpers/fetchUserCart';

function App() {
  
     const [user, setuser] = useState(null);
     const [cart, setcart] = useState({products :[]});
     const [token, setToken] = useCookies(['jwt-token']);

      async function accesstoken(){
      const res = await axios.get(`http://localhost:8765/accesstoken`, {withCredentials: true})
        setToken('jwt-token', res.data.token, {httpOnly: true})
       const tokenDetails = jwtDecode(res.data.token)
        //console.log(tokenDetails);
        setuser({username: tokenDetails.user, id: tokenDetails.id});
      
     }

      async function load(){
        if(!user){
          await accesstoken();
        }
        if(user){
          await fetchusercart(user.id, setcart)
         }
     }

     useEffect(()=>{
         load();
     },[user])

  return (


    <UserContext.Provider value ={{user, setuser}}>
      <CartContext.Provider value ={{cart, setcart}}>
    <div className='app-wrapper'>
      <Header color="white" light={true} expand="md"  container="md"/>
        <MainRoutes/>
      <Footer/>
    </div>
    </CartContext.Provider>
    </UserContext.Provider>
  )
}

export default App;


import { useState } from 'react';
import './App.css'
import Header from './components/Navbar/Header'
import Footer from './components/Navbar/footer/Footer';
import UserContext from './context/UserContext';
import MainRoutes from './routes/MainRoutes';
import CartContext from './context/CartContext';

function App() {
  
     const [user, setuser] = useState(null);
     const [cart, setcart] = useState({products :[]});

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

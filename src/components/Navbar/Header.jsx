
import './Header.css';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';
import { useCookies } from 'react-cookie';
import UserContext from '../../context/UserContext';
import CartContext from '../../context/CartContext';
import axios from 'axios';


function Header(props){
  const [isOpen, setIsOpen] = useState(false);
  const [token, settoken , removetoken] = useCookies(['jwt-token'])
 const  {user , setuser} = useContext(UserContext);
const {cart} = useContext(CartContext)

  const toggle = () => setIsOpen(!isOpen);

  useEffect(()=>{
      
  }, [token])
  
  return (
    <div>
      <Navbar {...props}>
        <NavbarBrand className='title' >
        
        <Link to="/">Shop Cart</Link>
        
        
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
           <UncontrolledDropdown nav inNavbar style={{marginRight : '2rem'}}>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Cart {cart.products.length}</DropdownItem>
                <DropdownItem>Settings</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  {token['jwt-token']?  <Link onClick={()=> {
                    //Cookies.remove('jwt-token');
                    //settoken(undefined);
                    removetoken('jwt-token');
                    axios.get(`http://localhost:8765/logout`, {withCredentials:true})
                    setuser(null);
                  }}
                    to="/signin">Logout</Link> : 
                      <Link to="/signin">SignIn.</Link>
                       }
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
             {user && <NavbarText>{user.username}</NavbarText>}
             {/* <NavbarText>username</NavbarText> */}
          </Nav>
         
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;

import './Header.css';
import { useEffect, useState } from 'react';
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

function Header(props){
  const [isOpen, setIsOpen] = useState(false);
  const [token, settoken , removetoken] = useCookies(['jwt-token'])


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
                <DropdownItem>Cart</DropdownItem>
                <DropdownItem>Settings</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  {token['jwt-token']?  <Link onClick={()=> {
                    //Cookies.remove('jwt-token');
                    //settoken(undefined);
                    removetoken('jwt-token');
                  }}
                    to="/signin">Logout</Link> : 
                      <Link to="/signin">SignIn.</Link>
                       }
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavbarText>UserName</NavbarText>
          </Nav>
         
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
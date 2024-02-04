import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
 
} from 'mdb-react-ui-kit';

export default function Navbar() {
  const [openNavRight, setOpenNavRight] = useState(false);

  return (
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
      <MDBNavbarBrand href='/'>EATERY</MDBNavbarBrand>
        <MDBNavbarToggler
          type='button'
          data-target='#navbarRightAlignExample'
          aria-controls='navbarRightAlignExample'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setOpenNavRight(!openNavRight)}
        >
           <i class="fa-solid fa-bars"></i>
        </MDBNavbarToggler>

        <MDBCollapse navbar open={openNavRight}>
          <MDBNavbarNav right fullWidth={false} className='mb-2 mb-lg-0'>
          
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
           <li className="nav-item">
             <NavLink className="nav-link" href="#" to={"/"}>
               Home
             </NavLink>
           </li>
          <li className="nav-item">
             <NavLink className="nav-link" href="#" to={"/signup"} >
               Signup
             </NavLink>
           </li>
           <li className="nav-item">
             <NavLink className="nav-link" href="#" to={"/login"}>
               Login
             </NavLink>
           </li>
           <li className="nav-item">
             <NavLink className="nav-link" href="#" to={"/listRestaurants"}>
               Restaurants List
             </NavLink>
           </li>
           <li className="nav-item">
             <NavLink className="nav-link" href="#" to={"/manageorder"}>
               Manage Orders
             </NavLink>
           </li>
       </ul>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
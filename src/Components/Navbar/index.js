import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from "./NavbarElements";
const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />

        <NavMenu>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/webdev">Webdev</NavLink>
          <NavLink to="/design">Design</NavLink>
          <NavLink to="/certificates">Certificates</NavLink>
          <NavLink to="/about">About</NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>

        {/* // <div>
        //   <input
        //     className="bg-light-green dib br3 pa2 ma1 bw2 shado-5"
        //     type="search"
        //     placeholder="Search Portolio"
        //     onChange={searchChange}
        //   />
        // </div> */}

        <NavBtn>
          <NavBtnLink to="/contact">Contact Me</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;

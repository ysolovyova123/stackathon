import React, { useState, useEffect } from "react";
import { connect } from 'react-redux'
import { HashRouter as Router, Link, Switch, Route } from 'react-router-dom';
import { FaBars, FaRegUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { GiFlowerPot } from "react-icons/gi";
import { BsSearch } from "react-icons/bs";
import { animateScroll as scroll } from "react-scroll";
import { IconContext } from "react-icons/lib";
// import {
//   Nav,
//   NavbarContainer,
//   NavLogo,
//   MobileIcon,
//   NavLinks,
//   NavMenu,
//   NavItem,
//   NavBtn,
//   NavBtnLink,
//   NavBtnLogOut,
//   Form,
//   FormInput,
//   FormButton,
//   NavLinkDown,
// } from "./NavbarElements";
// import { logOutUser } from '../../store/user'
// import Dropdown from "../Dropdown";

class Navbar extends React.Component {
  constructor() {
    super()
    //this.changeNav = this.changeNav.bind(this)
    this.toggleHome = this.toggleHome.bind(this)
    this.toggleFooter = this.toggleFooter.bind(this)
    this.onClick = this.onClick.bind(this)
  }

  onClick (e) {
    e.preventDefault();
    this.props.logOutUser()
    window.location.hash='/signIn'
  }

  toggleHome () {
    scroll.scrollToTop();
  };

  toggleFooter () {
    scroll.scrollToBottom();
  };

  render() {
    const {user} = this.props
    if (user.email) {
      return (
              <div id="NavbarContainer">
                <div id="LinkContainer">
                    <div id="LinkItem"><Link
                      to="/"
                      id="home"
                      onClick={this.toggleHome}
                    >Home
                    </Link>
                    </div>
                </div>
                <div id="LinkContainer">
                    <Link
                      to="about-us"
                      id="about-us"
                      onClick={this.toggleFooter}
                    >
                      About Us
                    </Link>
                </div>
                <div id="LinkContainer">
                    <Link to="/profile">My Profile</Link>
                </div>
                <div id="LinkContainer">
                    <Link to="/recipe-book">My Recipe Book</Link>
                </div>
                <div id="LinkContainer">
                    <Link to="/addRecipe">Add A Recipe</Link>
                </div>
                <div id="LinkContainer">
                    <Link to="/discover">Discover</Link>
                </div>
                <button onClick={this.onClick}>Log Out</button>
        </div>
      );
    }

    else {
      return (
        <div id="NavbarContainer">
                <div id="LinkContainer">
                    <div id="LinkItem"><Link
                      to="/"
                      id="home"
                      onClick={this.toggleHome}
                    >Home
                    </Link>
                    </div>
                </div>
                <div id="LinkContainer">
                    <Link
                      to="about-us"
                      id="about-us"
                      onClick={this.toggleFooter}
                    >
                      About Us
                    </Link>
                </div>
                <div id="LinkContainer">
                    <Link to="/recipe-book">My Recipe Book</Link>
                </div>
                <div id="LinkContainer">
                    <Link to="/addRecipe">Add A Recipe</Link>
                </div>
                <div id="LinkContainer">
                    <Link to="/discover">Discover</Link>
                </div>
                <div id="LinkContainer">
                    <Link to="/signIn">Sign In</Link>
                </div>
                <div id="LinkContainer">
                    <Link to="/signUp">Sign Up</Link>
                </div>
        </div>
      )
    }

  //   else {
  //     return (
  //       <>
  //         <IconContext.Provider value={{ color: "#fff" }}>
  //           <Nav>
  //             <NavbarContainer>
  //               <NavLogo to="/" onClick={this.toggleHome}>
  //                 <GiFlowerPot />
  //                 Florita
  //               </NavLogo>
  //               <MobileIcon onClick={this.props.toggle}>
  //                 <FaBars />
  //               </MobileIcon>
  //               <NavMenu>
  //                 <NavItem>
  //                   <NavLinks
  //                     to="/"
  //                     id="home"
  //                     // smooth={true}
  //                     // duration={500}
  //                     // spy={true}
  //                     // exact="true"
  //                     // offset={-80}
  //                     onClick={this.toggleHome}
  //                   >
  //                     Home
  //                   </NavLinks>
  //                 </NavItem>
  //                 <NavItem>
  //                   <NavLinkDown
  //                     to="about-us"
  //                     id="about-us"
  //                     // smooth={true}
  //                     // duration={500}
  //                     // spy={true}
  //                     // exact="true"
  //                     // offset={-80}
  //                     onClick={this.toggleFooter}
  //                   >
  //                     About Us
  //                   </NavLinkDown>
  //                 </NavItem>
  //                 <NavItem>
  //                   <NavBtn>
  //                     <Dropdown />
  //                   </NavBtn>
  //                 </NavItem>
  //                 <NavItem>
  //                   <NavLinks
  //                     to="/profile"
  //                     id="profile"
  //                     // spy={true} exact="true"
  //                   >
  //                     <FaRegUser />
  //                     My Account
  //                   </NavLinks>
  //                 </NavItem>
  //                 <NavItem>
  //                   <NavLinks
  //                     to="/cart"
  //                     // spy={true} exact="true"
  //                     id="cart"
  //                   >
  //                     <FiShoppingCart /> Cart
  //                   </NavLinks>
  //                 </NavItem>
  //               </NavMenu>
  //               <NavItem>
  //                 <Form className="search-form" action="#">
  //                   <FormInput
  //                     className="search-bar"
  //                     type="text"
  //                     placeholder="Search"
  //                   />
  //                   <FormButton className="search-button" type="submit">
  //                     <BsSearch />
  //                   </FormButton>
  //                 </Form>
  //               </NavItem>
  //               <NavItem>
  //                 <NavBtn>
  //                   <NavBtnLink to="/signIn" id="signin">
  //                     Log In
  //                   </NavBtnLink>
  //                 </NavBtn>
  //                 <NavBtn>
  //                   <NavBtnLink to="/signUp" id="signup">
  //                     Sign Up
  //                   </NavBtnLink>
  //                 </NavBtn>
  //               </NavItem>
  //             </NavbarContainer>
  //           </Nav>
  //         </IconContext.Provider>
  //       </>
  //     );
  //   }
  }
};

const mapState = state => (
  {
    user: state.user
  }
)

const mapDispatch = (dispatch) => {
    return {
      logOutUser: () => dispatch({type: "LOG_OUT"})
    }
}

export default connect(mapState, mapDispatch)(Navbar);

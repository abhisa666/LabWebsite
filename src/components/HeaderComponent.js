import React, { Component } from 'react';
import { Navbar, Jumbotron, Nav, NavItem, NavbarToggler, Collapse} from 'reactstrap';
import {NavLink} from 'react-router-dom';


class Header extends Component{
    constructor(props){
        super(props);

        this.state={
            isNavOpen: false
        };

        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav(){
        this.setState(
            {
                isNavOpen: !this.state.isNavOpen
            }
        );
    }

    render(){
        return(
            <>
                <div>
                    <div className="container">
                        <img className="bpitLogo" src="images/bpit_logo.png"  height="100" width="200" alt="BPIT" />
                        <span style={{fontSize:"35px"}}>BHAGWAN PARSHURAM INSTITUTE OF TECHNOLOGY</span>
                    </div>
                </div>
                <Jumbotron className="jumbo" >
                    <div  className="container">
                        <div className="row row-header">
                            
                                <h1>Data Engineering and reasearch Lab</h1>
                                <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                            
                        </div>
                    </div>
                </Jumbotron>
                <Navbar color="light" expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav className="mr-auto" navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        College Details
                                    </NavLink>
                                </NavItem>    
                            </Nav>
                            <Nav className="mr-auto" navbar>
                                <NavItem>
                                    {/* <NavLink className="nav-link" to="/home"> */}
                                        Faculty Members
                                    {/* </NavLink> */}
                                </NavItem>    
                            </Nav>
                            <Nav className="mr-auto" navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/studentbody">
                                        Student Body
                                    </NavLink>
                                </NavItem>    
                            </Nav>
                            <Nav className="mr-auto" navbar>
                                <NavItem>
                                    {/* <NavLink className="nav-link" to="/home"> */}
                                        Reasearch Paper
                                    {/* </NavLink> */}
                                </NavItem>    
                            </Nav>
                            <Nav className="mr-auto" navbar>
                                <NavItem>
                                    {/* <NavLink className="nav-link" to="/home"> */}
                                        Events
                                    {/* </NavLink> */}
                                </NavItem>    
                            </Nav>
                            <Nav className="mr-auto" navbar>
                                <NavItem>
                                    {/* <NavLink className="nav-link" to="/home"> */}
                                        Collaborations
                                    {/* </NavLink> */}
                                </NavItem>    
                            </Nav>
                            <Nav className="mr-auto" navbar>
                                <NavItem>
                                    {/* <NavLink className="nav-link" to="/home"> */}
                                        Feedback
                                    {/* </NavLink> */}
                                </NavItem>    
                            </Nav>
                            <Nav className="mr-auto" navbar>
                                <NavItem>
                                    {/* <NavLink className="nav-link" to="/home"> */}
                                        Contact Us
                                    {/* </NavLink> */}
                                </NavItem>    
                            </Nav>
                            

                        </Collapse>
                    </div>
                </Navbar>
                
            </>

        );
    }
}

export default Header;
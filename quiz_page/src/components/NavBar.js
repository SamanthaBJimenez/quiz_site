import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
        <Navbar variant="light" bg="light" expand="lg" collapseOnSelect>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav>
                    <Nav.Item>
                        <Nav.Link><NavLink exact to={"/"} className="nav_link" activeClassName={"selected"}>The Quiz Site</NavLink></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            <div class="dropdown">
                                <NavLink to={"/quizzes"} activeClassName={"selected_dropdown_about"} class="dropbtn">Quizzes</NavLink>
                                <div class="dropdown-content">
                                    <NavLink exact to={"/quizzes/food"} className="nav_link" activeClassName={"selected_dropdown"}>Food</NavLink>
                                    <NavLink exact to={"/quizzes/love"} className="nav_link" activeClassName={"selected_dropdown"}>Love</NavLink>
                                    <NavLink exact to={"/quizzes/movies"} className="nav_link" activeClassName={"selected_dropdown"}>Movies</NavLink>
                                    <NavLink exact to={"/quizzes/music"} className="nav_link" activeClassName={"selected_dropdown"}>Music</NavLink>
                                </div>
                            </div>
                        </Nav.Link>
                    </Nav.Item>
                    {/* <Nav.Item>
                        <Nav.Link><NavLink exact to={"/faq"} className="nav_link" activeClassName={"selected"}>FAQ's</NavLink></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link><NavLink exact to={"/contact"} className="nav_link" activeClassName={"selected"}>Contact</NavLink></Nav.Link>
                    </Nav.Item> */}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </div>
    )
};

export default NavBar;
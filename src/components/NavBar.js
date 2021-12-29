import React from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

const NavBar = () => {
    const history = useHistory()
    return (
        <div>
            <Navbar bg="light" expand="lg">
                {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
                <NavLink className="navbar-brand" to="/" exact>React-Bootstrap</NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        {/* <Nav.Link href="#home">Home</Nav.Link> */}
                        <NavLink className="nav-link" activeClassName="active" to="/" exact>Home</NavLink>
                        <NavLink className="nav-link" activeClassName="active" to="/product" exact>Product</NavLink>
                        <NavLink className="nav-link" activeClassName="active" to="/about">About</NavLink>
                        <NavLink className="nav-link" activeClassName="active" to="/contactme">ContactMe</NavLink>

                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="Workshop Pagination" id="basic-nav-dropdown">
                            <NavDropdown.Item onClick={() => {
                                history.replace("/hospital")
                            }}>Hospital List</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={() => {
                                history.replace("/category")
                            }}>
                                News Category

                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavBar

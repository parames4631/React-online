import React from 'react'
import { Navbar , Nav , NavDropdown , Form, FormControl , Button } from "react-bootstrap"
import { NavLink } from "react-router-dom"

const NavBar = () => {
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
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
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

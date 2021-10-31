import React from 'react';
import '../App.css'
import {
    Navbar,
    Container,
    Form,
    FormControl,
    Button,
    Nav,
    NavDropdown
} from 'react-bootstrap';
import { Link, useHistory } from "react-router-dom";
import { useState } from 'react';

const NavBar = () => {
    const [query, setQuery] = useState("")
    const handleOnChange = (e) => {
        setQuery(e.target.value)

    }
    const history = useHistory()
    const handleSubmit = (e) => {
        e.preventDefault();
        history.push(`/search/${query}`)
    }
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">Tai's Movie</Navbar.Brand>
                {/* <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">Link</Nav.Link>
                        <NavDropdown title="Link" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#" disabled>
                            Link
                        </Nav.Link>
                    </Nav>
                  
                </Navbar.Collapse> */}
                <Form className="d-flex" onSubmit={handleSubmit}>
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        onChange={handleOnChange}
                    />
                    <Button type="submit" variant="outline-success">Search</Button>
                </Form>
            </Container>
        </Navbar>
    );
};

export default NavBar;
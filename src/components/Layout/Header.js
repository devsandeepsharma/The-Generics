import { useContext } from "react";
import { Badge, Button, Container, Nav, Navbar } from "react-bootstrap";

import CartContext from "../../store/CartContext";
import { Link, NavLink } from "react-router-dom";

const Header = (props) => {

    const {products} = useContext(CartContext);

    const totalCount = products.reduce((total, product) => total += product.quantity, 0)

    return (
        <Navbar expand="lg" bg="dark" data-bs-theme="dark" >
            <Container>
                <Navbar.Brand href="#">The Generics</Navbar.Brand>
                <Button 
                    variant="light" 
                    onClick={props.onClick} 
                    className="d-lg-none me-2"
                >
                    Cart <Badge bg="secondary">{totalCount}</Badge>
                </Button>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '300px' }}
                        navbarScroll
                    >
                        <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/store">Store</Nav.Link>
                        <Nav.Link as={NavLink} to="/about">About</Nav.Link>
                        <Nav.Link as={NavLink} to="/contact">Contact US</Nav.Link>
                    </Nav>
                    <Button 
                        variant="light" 
                        onClick={props.onClick} 
                        className="d-none d-lg-block ms-lg-auto"
                    >
                        Cart <Badge bg="secondary">{totalCount}</Badge>
                    </Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;
import { Badge, Button, Container, Nav, Navbar } from "react-bootstrap";

const Header = (props) => {
    return (
        <Navbar expand="lg" bg="dark" data-bs-theme="dark" >
            <Container>
                <Navbar.Brand href="#">The Generics</Navbar.Brand>
                <Button 
                    variant="light" 
                    onClick={props.onClick} 
                    className="d-lg-none me-2"
                >
                    Cart <Badge bg="secondary">4</Badge>
                </Button>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '300px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">Store</Nav.Link>
                        <Nav.Link href="#action2">About</Nav.Link>
                    </Nav>
                    <Button 
                        variant="light" 
                        onClick={props.onClick} 
                        className="d-none d-lg-block ms-lg-auto"
                    >
                        Cart <Badge bg="secondary">4</Badge>
                    </Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;
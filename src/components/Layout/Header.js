import { Badge, Button, Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
    return (
        <Navbar expand="lg" bg="dark" data-bs-theme="dark" >
            <Container>
                <Navbar.Brand href="#">The Generics</Navbar.Brand>
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
                    <Button variant="light">
                        Profile <Badge bg="secondary">9</Badge>
                        <span className="visually-hidden">unread messages</span>
                    </Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;
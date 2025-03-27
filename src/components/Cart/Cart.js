import { Button, Card } from "react-bootstrap";
import CartModal from "../UI/CartModal"

const productsArr = [
    {
        title: 'Colors',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    },
    {
        title: 'Black and white Colors',
        price: 50,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    },
    {
        title: 'Yellow and Black Colors',
        price: 70,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    },
    {
        title: 'Blue Color',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    }
]

const Cart = (props) => {
    return (
        <CartModal 
            show={props.show}
            onHide={props.onHide}
        >
              {
                productsArr.map(product => (
                    <Card className="p-2">
                        <div className="d-flex align-items-center">
                            <Card.Img 
                                variant="left" 
                                src={product.imageUrl} 
                                className="me-3" 
                                style={{ width: "80px", height: "80px", objectFit: "cover" }}
                            />
                            <Card.Body>
                                <Card.Title>{product.title}</Card.Title>
                                <Card.Text>Rs {product.price}/-</Card.Text>
                            </Card.Body>
                            <Card.Footer style={{ background: "transparent", border: "none" }}>
                                <Button variant="danger" size="sm">Remove</Button>
                            </Card.Footer>
                        </div>
                    </Card>
                ))
              }
        </CartModal>
    )
}

export default Cart;
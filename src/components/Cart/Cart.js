import { Button, Card } from "react-bootstrap";
import CartModal from "../UI/CartModal"
import { useContext } from "react";

import CartContext from "../../store/CartContext";

const Cart = (props) => {

    const {products, removeProducts} = useContext(CartContext);
    const totalCount = products.reduce((total, product) => total += product.quantity, 0)

    return (
        <CartModal 
            show={props.show}
            onHide={props.onHide}
        >
            {products.length <= 0 && <h2>Please add items to the Cart.</h2>}
              {
                products.map(product => (
                    <Card className="p-2" key={product.title}>
                        <div className="d-flex align-items-center">
                            <Card.Img 
                                variant="left" 
                                src={product.imageUrl} 
                                className="me-3" 
                                style={{ width: "80px", height: "80px", objectFit: "cover" }}
                            />
                            <Card.Body>
                                <Card.Title>{product.title}</Card.Title>
                                <Card.Text>
                                    Rs {product.price}/-
                                    <p>Count: {totalCount}</p>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer style={{ background: "transparent", border: "none" }}>
                                <Button variant="danger" size="sm" onClick={() => {removeProducts(product)}}>Remove</Button>
                            </Card.Footer>
                        </div>
                    </Card>
                ))
              }
        </CartModal>
    )
}

export default Cart;
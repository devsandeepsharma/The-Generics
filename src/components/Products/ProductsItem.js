import { Button, Card } from "react-bootstrap"
import { useContext } from "react";

import CartContext from "../../store/CartContext";

const ProductsItem = (props) => {

    const {addProducts} = useContext(CartContext);

    const handleClick = () => {
        addProducts(props.product);
    }

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.product.imageUrl} />
            <Card.Body>
                <Card.Title>{props.product.title}</Card.Title>
                <Card.Text>
                    Rs.{props.product.price}/-
                </Card.Text>
                <Button variant="primary" onClick={handleClick}>Add to Cart</Button>
            </Card.Body>
        </Card>
    )
}

export default ProductsItem;
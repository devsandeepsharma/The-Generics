import { useContext } from "react";
import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";

import CartContext from "../../store/CartContext";

const ProductsItem = (props) => {

    const {addProducts} = useContext(CartContext);

    const handleClick = () => {
        addProducts(props.product);
    }

    return (
        <Card style={{ width: '18rem' }}>
            <Link to={props.product.title} className="text-decoration-none">
                <Card.Img variant="top" src={props.product.imageUrl} />
            </Link>
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
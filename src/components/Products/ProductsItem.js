import { Button, Card } from "react-bootstrap"

const ProductsItem = (props) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.product.imageUrl} />
            <Card.Body>
                <Card.Title>{props.product.title}</Card.Title>
                <Card.Text>
                    Rs.{props.product.price}/-
                </Card.Text>
                <Button variant="primary">Add to Cart</Button>
            </Card.Body>
        </Card>
    )
}

export default ProductsItem;
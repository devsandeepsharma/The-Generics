import { Col, Container, Row } from "react-bootstrap"
import ProductsItem from "./ProductsItem";

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

const Products = () => {
    return (
        <Container className="mt-5">
            <Row  className="g-4">
                {productsArr.map((product) => (
                    <Col key={product.title}><ProductsItem product={product}/></Col>
                ))}
            </Row>
        </Container>
    )
}

export default Products;
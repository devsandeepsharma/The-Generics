import { Card, Container } from "react-bootstrap";
import { useState } from "react";
import { useParams } from "react-router-dom";

import Header from "../Layout/Header";
import Cart from "../Cart/Cart";
import Footer from "../Layout/Footer";

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

const Product = () => {

    const [handleCartShow, setHandleCartShow] = useState(false);

    const showCart = () => {
        setHandleCartShow(true);
    }

    const hideCart = () => {
        setHandleCartShow(false);
    }

    const {productTitle} = useParams();

    const product = productsArr.filter(item => item.title === productTitle)[0];

    return (
        <>
            {handleCartShow && <Cart show={showCart} onHide={hideCart} />}
            <Header onClick={showCart} />
            <main>
                <Container>
                    <div className="p-5 bg-secondary-subtle">
                        <p className="p-3 fs-1 fw-bold text-center">The Generics</p>
                    </div>
                    <h1 className="py-3">Product Page</h1>
                    <Card className="p-2" key={product.title}>
                        <div className="d-flex align-items-center">
                            <Card.Img 
                                variant="left" 
                                src={product.imageUrl} 
                                className="me-3" 
                                style={{ width: "400px", height: "400px", objectFit: "cover" }}
                            />
                            <Card.Body>
                                <Card.Title className="fw-bold">{product.title}</Card.Title>
                                <Card.Text>
                                    Rs {product.price}/-
                                </Card.Text>
                            </Card.Body>
                        </div>
                    </Card>
                </Container>
            </main>
            <Footer />
        </>
    )
}

export default Product;
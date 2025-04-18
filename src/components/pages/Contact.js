import { Button, Container, Form } from "react-bootstrap";
import { useState } from "react";

import Header from "../Layout/Header";
import Footer from "../Layout/Footer";

const Contact = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNum, setPhoneNum] = useState("");

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if(username === "" || email === "" || phoneNum === "") {
            return;
        }

        sendContactDetails({username, email, phoneNum});
        setEmail("");
        setPhoneNum("");
        setUsername("");
    }

    const sendContactDetails = async (contact) => {
        const res = await fetch("https://myecommerse-3e28e-default-rtdb.europe-west1.firebasedatabase.app/contact.json", {
            method: "POST",
            body: JSON.stringify(contact),
        })
        console.log(res);
    }

    return (
        <>
            <Header />
            <main>
                <Container>
                    <div className="p-5 bg-secondary-subtle">
                        <p className="p-3 fs-1 fw-bold text-center">The Generics</p>
                    </div>
                    <h1 className="py-3">Contact Us Page</h1>
                    <Form onSubmit={handleFormSubmit} className="p-4 bg-light rounded">
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                            type="text"
                            placeholder="Enter Your Name"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                            type="email"
                            placeholder="Enter Your Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control
                            type="tel"
                            placeholder="Enter Your Phone Number"
                            value={phoneNum}
                            onChange={(e) => setPhoneNum(e.target.value)}
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit" >
                            Send Details
                        </Button>
                    </Form>
                </Container>
            </main>
            <Footer />
        </>
    )
}

export default Contact;
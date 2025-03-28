import { useState } from "react";
import { Button, Form } from "react-bootstrap";

const MoviesForm = () => {
    const [title, setTitle] = useState("");
    const [openingText, setOpeningText] = useState("");
    const [releaseDate, setReleaseDate] = useState("");

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(title, openingText, releaseDate);
    }

    return (
        <Form onSubmit={handleFormSubmit} className="p-4 bg-light rounded">
            <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control
                type="text"
                placeholder="Enter movie title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
            </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label>Opening Text</Form.Label>
            <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter opening text"
            value={openingText}
            onChange={(e) => setOpeningText(e.target.value)}
            />
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label>Release Date</Form.Label>
            <Form.Control
            type="text"
            placeholder="Release Date"
            value={releaseDate}
            onChange={(e) => setReleaseDate(e.target.value)}
            />
        </Form.Group>

        <Button variant="primary" type="submit" >
            Add Movie
        </Button>
    </Form>
    )
}

export default MoviesForm;
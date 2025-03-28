import { Card } from "react-bootstrap";

const MoviesCard = (props) => {
    return (
        <Card>
            <Card.Body>
              <Card.Title className="fw-bold">{props.movie.title}</Card.Title>
              <div className="d-flex gap-3">
                  <p>{props.movie.director}</p>
                  <p>{props.movie.release}</p>
              </div>
              <Card.Text>{props.movie.summary}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default MoviesCard;
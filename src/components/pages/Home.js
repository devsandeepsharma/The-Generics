import { useState } from "react";
import { Button, Container, Row } from "react-bootstrap";

import Header from "../Layout/Header";
import MoviesCard from "../UI/MoviesCard";

const Home = () => {

    const [movies, setMovies] = useState([]);

    const fetchMovies = async () => {
        const json = await fetch("https://swapi.dev/api/films");
        const moviesData = await json.json();
        const transformData = moviesData.results.map(movie => {
            return {
                id: movie.episode_id,
                title: movie.title,
                summary: movie.opening_crawl,
                director: movie.director,
                release: movie.release_date
            }
        });
        setMovies(transformData);
    }

    return (
        <>
            <Header />
            <main>
                <Container>
                    <div className="p-5 bg-secondary-subtle">
                        <p className="p-3 fs-1 fw-bold text-center">The Generics</p>
                        <Button className="d-block m-auto" onClick={fetchMovies}>Fetch Movies</Button>
                    </div>
                    <h1 className="py-3">Movies Page</h1>
                    <Row xs={1} md={2} className="g-4">
                        {console.log(movies)}
                        {
                            movies.map(movie => (
                                <MoviesCard key={movie.id} movie={movie} />
                            ))
                        }
                    </Row>
                </Container>
            </main> 
        </>
    )
}

export default Home;